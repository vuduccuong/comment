import React, { useState, Fragment, useEffect } from "react";

//css
import "./f-comment.css";

//component
import CommentBox from "../comment-box/Comment-Box";
import UserComment from "../user-comment/User-Comment";
import Paging from "../paging/Paging";
import { CommentContext } from "../utils/MyContext";

const FComment = () => {
  const groupComment = arr => {
    return arr.filter(item => {
      let newArr = [];
      arr.map(t => {
        if (t.ParentID === item.ID) {
          return newArr.push(t);
        }
      });
      item.listRep = newArr;

      if (item.ParentID === 0) return item;
    });
  };

  const [dataComment, setDataComment] = useState([
    {
      ID: 3957185,
      PageID: 695472,
      CusName: "Nguyen anh",
      CusPhone: null,
      CusEmail: "63dcot2001@gmail.com",
      CustomerID: 0,
      Content:
        "Mình mới mua cục xạc dự phòng zadez dc 4 ngày. Nhưng dùng không thích. Giờ muốn đổi sang loại này có được không qtv?",
      DateCreated: "/Date(1577260200)/",
      IsBestRating: false,
      IsAdmin: false,
      ParentID: 0,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 24,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3914664,
      PageID: 695472,
      CusName: "Chen",
      CusPhone: null,
      CusEmail: "Aido@gmail.com",
      CustomerID: 0,
      Content:
        "Sạc này trên trang anker báo không có QC3.0, ở fpt lại ghi rõ có là sai thông tin rồi",
      DateCreated: "/Date(1571502277773)/",
      IsBestRating: false,
      IsAdmin: false,
      ParentID: 0,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 24,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3861452,
      PageID: 695472,
      CusName: "Nguyễn Minh Thư",
      CusPhone: null,
      CusEmail: "Thu1998nguyebluesky@gmail.com",
      CustomerID: 0,
      Content:
        "Sao sáng mình mua hàng thì nhân viên tư vấn là hiệu suất 100% mà giờ lại bảo là 80-85% là sao",
      DateCreated: "/Date(1568993273460)/",
      IsBestRating: false,
      IsAdmin: false,
      ParentID: 0,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 24,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3801489,
      PageID: 695472,
      CusName: "Nam",
      CusPhone: null,
      CusEmail: "nampkugl@gmail.com",
      CustomerID: 0,
      Content: "Cho mình hỏi 790 và 950 anker khác nhau ntn ạ",
      DateCreated: "/Date(1565797802647)/",
      IsBestRating: false,
      IsAdmin: false,
      ParentID: 0,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 24,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3723701,
      PageID: 695472,
      CusName: "trịnh xuân sang",
      CusPhone: null,
      CusEmail: "nhanhcaykho@gmail.com",
      CustomerID: 0,
      Content:
        "chop cho hỏi xạc vào trong bao lâu thì đầy pin vậy...? mình xạc 5h nhưng vẫn chưa đầy xạc dự phòng ...?",
      DateCreated: "/Date(1562809852733)/",
      IsBestRating: false,
      IsAdmin: false,
      ParentID: 0,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 24,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3703448,
      PageID: 695472,
      CusName: "a",
      CusPhone: null,
      CusEmail: "minhquang474@gmail.com",
      CustomerID: 0,
      Content: "Cổng sạc vào của pin dự phòng này là Micro hay Type C?",
      DateCreated: "/Date(1562383854757)/",
      IsBestRating: false,
      IsAdmin: false,
      ParentID: 0,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 24,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3652226,
      PageID: 695472,
      CusName: "bình",
      CusPhone: null,
      CusEmail: "vanbinh20011231@gmail.com",
      CustomerID: 0,
      Content: "sạc có bh j anh",
      DateCreated: "/Date(1560996176920)/",
      IsBestRating: false,
      IsAdmin: false,
      ParentID: 0,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 24,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3652042,
      PageID: 695472,
      CusName: "bình",
      CusPhone: null,
      CusEmail: "nguyenvanbinh2001@gmail.com",
      CustomerID: 0,
      Content: "sạc mới mua bằng phiếu mua hàng 800000 có trả lại được không",
      DateCreated: "/Date(1560980897707)/",
      IsBestRating: false,
      IsAdmin: false,
      ParentID: 0,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 24,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3652037,
      PageID: 695472,
      CusName: "đặng văn thêm",
      CusPhone: null,
      CusEmail: "dangvanthem1995@gmail.com",
      CustomerID: 0,
      Content: "mua xong nếu không thích có thể trả lại không",
      DateCreated: "/Date(1560977840367)/",
      IsBestRating: false,
      IsAdmin: false,
      ParentID: 0,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 24,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3652036,
      PageID: 695472,
      CusName: "đặng văn thêm",
      CusPhone: null,
      CusEmail: "dangvanthem1997@gmail.com",
      CustomerID: 0,
      Content: "xạc có bảo hành đổi trả ko ạ",
      DateCreated: "/Date(1560977699813)/",
      IsBestRating: false,
      IsAdmin: false,
      ParentID: 0,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 24,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3652143,
      PageID: 695472,
      CusName: "Nguyễn Thị Tùng Vy",
      CusPhone: null,
      CusEmail: "VYNTT10@fpt.com.vn",
      CustomerID: 0,
      Content:
        "<p>Chào Thêm,<br />\r\nDạ rất tiếc sản phẩm này bên mình chưa hỗ trợ đổi trả theo nhu cầu bạn nha.<br />\r\nMình xin thông tin đến bạn!</p>\r\n\r\n<p> </p>\r\n",
      DateCreated: "/Date(1560992646007)/",
      IsBestRating: false,
      IsAdmin: true,
      ParentID: 3652037,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 0,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3652179,
      PageID: 695472,
      CusName: "Nguyễn Thị Tùng Vy",
      CusPhone: null,
      CusEmail: "VYNTT10@fpt.com.vn",
      CustomerID: 0,
      Content:
        "<p>Chào Bình,<br />\r\nDạ rất tiếc sản phẩm này bên mình chưa hỗ trợ đổi trả theo nhu cầu bạn nha.<br />\r\nMình xin thông tin đến bạn!</p>\r\n\r\n<p> </p>\r\n",
      DateCreated: "/Date(1560994523367)/",
      IsBestRating: false,
      IsAdmin: true,
      ParentID: 3652042,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 0,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3652232,
      PageID: 695472,
      CusName: "Nguyễn Thị Tùng Vy",
      CusPhone: null,
      CusEmail: "VYNTT10@fpt.com.vn",
      CustomerID: 0,
      Content:
        "<p>Chào Thêm,<br />\r\nDạ sản phẩm được hỗ trợ bảo hành 1 đổi 1 trong 12 tháng nếu có lỗi phần cứng do NSX bạn nha. <br />\r\nThông tin đến bạn!</p>\r\n",
      DateCreated: "/Date(1560996234423)/",
      IsBestRating: false,
      IsAdmin: true,
      ParentID: 3652036,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 0,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3652234,
      PageID: 695472,
      CusName: "Trần Quốc Hoàn",
      CusPhone: null,
      CusEmail: "HoanTQ7@fpt.com.vn",
      CustomerID: 0,
      Content:
        "<p>Chào Bình,<br />\r\nDạ sản phẩm được BẢO HÀNH 1 NĂM 1 ĐỔI 1 bạn nhé,<br />\r\nBạn quan tâm có thể để lại SĐT liên hệ tại đây hoặc gọi tới tổng đài miễn phí 18006601, FPTShop sẽ hỗ trợ bạn mua hàng nhanh nhất ạ.<br />\r\nThân mến!</p>\r\n\r\n<p> </p>\r\n",
      DateCreated: "/Date(1560996337487)/",
      IsBestRating: false,
      IsAdmin: true,
      ParentID: 3652226,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 0,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3914671,
      PageID: 695472,
      CusName: "Lê Tiến Lực",
      CusPhone: null,
      CusEmail: "luclt@fpt.com.vn",
      CustomerID: 0,
      Content:
        "<p>Chào Chen,</p>\r\n\r\n<p> Dạ cảm ơn bạn đã thông tin tới shop bên mình sẽ kiểm tra lại thông tin nếu chính xác bên mình sẽ điều chỉnh lại ạ , Trân trọng ! </p>\r\n",
      DateCreated: "/Date(1571502494537)/",
      IsBestRating: false,
      IsAdmin: true,
      ParentID: 3914664,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 0,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3957192,
      PageID: 695472,
      CusName: "Nguyễn Thị Tùng Vy",
      CusPhone: null,
      CusEmail: "VYNTT10@fpt.com.vn",
      CustomerID: 0,
      Content:
        "<p>Chào Anh,<br />\r\nDạ rất tiếc Pin sạc dự phòng Li-Polymer 10000mAh ZADEZ  bên mình chưa hỗ trợ đổi trả sản phẩm theo nhu cầu bạn nha.<br />\r\nMình xin thông tin đến bạn!</p>\r\n\r\n<p> </p>\r\n",
      DateCreated: "/Date(1573694919803)/",
      IsBestRating: false,
      IsAdmin: true,
      ParentID: 3957185,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 0,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3861479,
      PageID: 695472,
      CusName: "Nguyễn Thị Phương Nhi",
      CusPhone: null,
      CusEmail: "NhiNTP5@fpt.com.vn",
      CustomerID: 0,
      Content:
        "<p>Chào Nguyễn Minh Thư,</p>\r\n\r\n<p>Dạ đối với các pin sạc dự phòng, hiệu suất luôn nằm trong khoảng 65% - 70% bạn nha. Mình rất xin lỗi bạn vì sự nhầm lẫn của nhân viên. Mong bạn thông cảm ạ. Mình xin ghi nhận và chuyển thông tin đến bộ phận hỗ trợ để cải thiện chất lượng dịch vụ hơn ạ. Thân mến!</p>\r\n",
      DateCreated: "/Date(1568994451183)/",
      IsBestRating: false,
      IsAdmin: true,
      ParentID: 3861452,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 0,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3801630,
      PageID: 695472,
      CusName: "Lê Tiến Lực",
      CusPhone: null,
      CusEmail: "luclt@fpt.com.vn",
      CustomerID: 0,
      Content:
        '<p><span style="color: rgb(80, 80, 80); font-family: Arial, Helvetica, sans-serif; font-size: 14px; background-color: rgb(241, 241, 241);">Chào Nam,</span><br style="box-sizing: border-box; margin: 0px; padding: 0px; font-family: Arial, Helvetica, sans-serif; color: rgb(80, 80, 80); font-size: 14px; background-color: rgb(241, 241, 241);" />\r\n<span style="color: rgb(80, 80, 80); font-family: Arial, Helvetica, sans-serif; font-size: 14px; background-color: rgb(241, 241, 241);">Dạ tùy từng sản phẩm sẽ có giá và chất lượng khác nhau bạn nhé, để được hỗ trợ chi tiết bạn vui lòng để lại tên và số điện thoại tại đây hoặc liên hệ tổng đài tư vấn bán hàng miễn phí 18006601 để được hỗ trợ nhanh nhất ạ.</span><br style="box-sizing: border-box; margin: 0px; padding: 0px; font-family: Arial, Helvetica, sans-serif; color: rgb(80, 80, 80); font-size: 14px; background-color: rgb(241, 241, 241);" />\r\n<span style="color: rgb(80, 80, 80); font-family: Arial, Helvetica, sans-serif; font-size: 14px; background-color: rgb(241, 241, 241);">Thân mến !</span></p>\r\n',
      DateCreated: "/Date(1565807628637)/",
      IsBestRating: false,
      IsAdmin: true,
      ParentID: 3801489,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 0,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3723732,
      PageID: 695472,
      CusName: "Trần Quốc Hoàn",
      CusPhone: null,
      CusEmail: "",
      CustomerID: 0,
      Content:
        "<p>Chào Sang,</p>\n<p>Dạ bạn sạc khoảng 6 giờ sẽ đầy pin bạn nhé.</p>\n<p>Thông tin đến bạn ạ,</p>",
      DateCreated: "/Date(1562810556610)/",
      IsBestRating: false,
      IsAdmin: true,
      ParentID: 3723701,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 0,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    },
    {
      ID: 3703515,
      PageID: 695472,
      CusName: "Nguyễn Thiện Nhật Quyền",
      CusPhone: null,
      CusEmail: "QuyenNTN4@fpt.com.vn",
      CustomerID: 0,
      Content:
        "<p>Chào bạn,<br />\r\nDạ cổng sạc vào của pin dự phòng là MicroUSB bạn nhé. Thân mến!</p>\r\n",
      DateCreated: "/Date(1562385133573)/",
      IsBestRating: false,
      IsAdmin: true,
      ParentID: 3703448,
      TotalReply: 0,
      TotalLike: 0,
      ListCustomerLike: "",
      overall_count: 0,
      FirstMongo2Sql: false,
      IsForumComment: false,
      IsXuly: null,
      NgayXuLy: null,
      NguoiXuLy: null,
      IsBad: null,
      isFstudio: null
    }
  ]);

  const [page, setPage] = useState(1);
  var [replying, setReplying] = useState([]);

  //changePage
  const onChangePage = page => {
    setPage(page);
  };

  useEffect(() => {
    console.log("reRender", page);
  }, [page]);

  return (
    <Fragment>
      <div className="page-section margin-bottom-30">
        <div className="container">
          <div className="card card--section">
            <div className="title p020 margin-bottom-15">
              <h4>
                Hỏi &amp; Đáp <span className="badge text-white">1234</span>
              </h4>
            </div>
            <div className="row">
              <CommentBox hidden={false} item={{ ID: 0 }} top={true} />
            </div>
            <div className="row">
              <div className="comment">
                <CommentContext.Provider value={[replying, setReplying]}>
                  {groupComment(dataComment).map((item, index) => {
                    return (
                      <Fragment key={index}>
                        <UserComment level={`comment-box`} data={item} />
                      </Fragment>
                    );
                  })}
                </CommentContext.Provider>
              </div>
              <Paging
                changePage={page => {
                  onChangePage(page);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FComment;
