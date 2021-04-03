import { Form, Input, Button, Checkbox, Divider, InputNumber } from "antd";
import "./index.css";

function UploadPage() {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품사진</div>}
        >
          <div id="upload-img-test">
            <img src="/images/icons/camera.png" />
            <span>이미지 업로드해줘</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">이름</div>}
          name="seller"
          rules={[{ required: true, message: "입력해줘여 " }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="ㅇㅇㅇㅇ입력해줘여"
          ></Input>
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품이름</div>}
          rules={[{ required: true, message: "상품이름 입력 " }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품이름 입력해줭ㅇㅇㅇ"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[{ required: true, message: "가격 입력 " }]}
        >
          <InputNumber defaultValue={0} className="upload-price" size="large" />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품 소개</div>}
          rules={[{ required: true, message: "상품 소개입력" }]}
        >
          <Input.TextArea
            size="large"
            id="product-description"
            showCount={true}
            maxLength={500}
            placeholder="상품 소개를 적어줘"
          />
        </Form.Item>
        <Form.Item>
          <Button id="sunmit-button" size="large" htmlType="submit">
            등록
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
