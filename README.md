# VGG16 and MobileNet with Tensorflow.js
   pretrained VGG16 and MobileNet with TensorFlow.js . MobileNet needs to be manually downloaded
   and converted with tensorflowjs_converter --input_format keras
## How to use it efficiently
  1. Import keras 
  2. Import tensorflowjs as TFJS
  4. npm install
  3. Run python download-latest-vgg16.py
  4. Convert the .h5 model to tensorflow.js -> tensorflowjs_converter --input_format keras ./VGG16.h5 ./path/to/./client/VGG16
  4. Move to ../client/${modelName}
  5. Node server.js  
  6. Demo should be server on localhost:81
