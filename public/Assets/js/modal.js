document.addEventListener("DOMContentLoaded", function(event) { 
	var Modal = function(element) {
		this.element = element;
		this.triggers = document.querySelectorAll('[aria-controls="' + this.element.getAttribute('id') + '"]');
		this.firstFocusable = null;
		this.lastFocusable = null;
		this.selectedTrigger = null;
		this.showClass = 'modal--is-visible';
		this.initModal();
	};

	Modal.prototype.initModal = function() {
		var self = this;
		//open modal when clicking on trigger buttons
		if (this.triggers) {
			for (var i = 0; i < this.triggers.length; i++) {
				this.triggers[i].addEventListener('click', function(event) {
					event.preventDefault();
					console.log(event);
					self.selectedTrigger = event.target;
					self.showModal();
					self.initModalEvents();
					self.innerHTML = 'Hello World!';
				});
			}
		}

		// listen to the openModal event -> open modal without a trigger button
		this.element.addEventListener('openModal', function(event) {
			if (event.detail) self.selectedTrigger = event.detail;
			self.showModal();
			self.initModalEvents();
		});
	};

	Modal.prototype.showModal = function() {
		var self = this;
		Util.addClass(this.element, this.showClass);
		this.getFocusableElements();
		this.firstFocusable.focus();
		// wait for the end of transitions before moving focus
		this.element.addEventListener('transitionend', function cb(event) {
			self.firstFocusable.focus();
			self.element.removeEventListener('transitionend', cb);
		});
		this.emitModalEvents('modalIsOpen');
	};

	Modal.prototype.closeModal = function() {
		Util.removeClass(this.element, this.showClass);
		this.firstFocusable = null;
		this.lastFocusable = null;
		if (this.selectedTrigger) this.selectedTrigger.focus();
		//remove listeners
		this.cancelModalEvents();
		this.emitModalEvents('modalIsClose');
	};

	Modal.prototype.initModalEvents = function() {
		//add event listeners
		this.element.addEventListener('keydown', this);
		this.element.addEventListener('click', this);
	};

	Modal.prototype.cancelModalEvents = function() {
		//remove event listeners
		this.element.removeEventListener('keydown', this);
		this.element.removeEventListener('click', this);
	};

	Modal.prototype.handleEvent = function(event) {
		switch (event.type) {
			case 'click': 
                this.initClick(event);
                break;
			
            case 'keydown':
                this.initKeyDown(event);
                break;
		}
	};

	Modal.prototype.initKeyDown = function(event) {
		if ((event.keyCode && event.keyCode === 27) || (event.key && event.key === 'Escape')) {
			//close modal window on esc
			this.closeModal();
		} else if ((event.keyCode && event.keyCode === 9) || (event.key && event.key === 'Tab')) {
			//trap focus inside modal
			this.trapFocus(event);
		}
	};

	Modal.prototype.initClick = function(event) {
		//close modal when clicking on close button or modal bg layer
		if (!event.target.closest('.js-modal__close') && !Util.hasClass(event.target, 'js-modal')) return;
		event.preventDefault();
		this.closeModal();
	};

	Modal.prototype.trapFocus = function(event) {
		if (this.firstFocusable === document.activeElement && event.shiftKey) {
			//on Shift+Tab -> focus last focusable element when focus moves out of modal
			event.preventDefault();
			this.lastFocusable.focus();
		}
		if (this.lastFocusable === document.activeElement && !event.shiftKey) {
			//on Tab -> focus first focusable element when focus moves out of modal
			event.preventDefault();
			this.firstFocusable.focus();
		}
	};

	Modal.prototype.getFocusableElements = function() {
		//get all focusable elements inside the modal
		var allFocusable = this.element.querySelectorAll(
			'[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'
		);
		this.getFirstVisible(allFocusable);
		this.getLastVisible(allFocusable);
	};

	Modal.prototype.getFirstVisible = function(elements) {
		//get first visible focusable element inside the modal
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length) {
				this.firstFocusable = elements[i];
				return true;
			}
		}
	};

	Modal.prototype.getLastVisible = function(elements) {
		//get last visible focusable element inside the modal
		for (var i = elements.length - 1; i >= 0; i--) {
			if (elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length) {
				this.lastFocusable = elements[i];
				return true;
			}
		}
	};

	Modal.prototype.emitModalEvents = function(eventName) {
		var event = new CustomEvent(eventName, { detail: this.selectedTrigger });
		this.element.dispatchEvent(event);
	};

	//initialize the Modal objects
	var modals = document.getElementsByClassName('js-modal');
	if (modals.length > 0) {
		for (var i = 0; i < modals.length; i++) {
			(function(i) {
				new Modal(modals[i]);
			})(i);
		}
	}
});
