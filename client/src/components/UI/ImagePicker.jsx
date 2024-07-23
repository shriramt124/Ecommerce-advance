import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
const ImagePicker = ({onChangeImage}) => {
  const [fileList, setFileList] = useState([]);
  const [imageFile,setImageFile] = useState(null);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
     if(newFileList[0]){
      setImageFile(newFileList[0].originFileObj)
      onChangeImage(imageFile)
     }

  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    image.name = 'image'
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <ImgCrop rotationSlider>
      <Upload
         
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        name='image'
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};
export default ImagePicker;