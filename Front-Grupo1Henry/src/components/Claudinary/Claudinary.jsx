import { Image } from 'cloudinary-react';

const Claudinary = () => {
  return (
    <div>
              <h1>My Cloudinary Image</h1>
             <Image publicId="your_image_public_id" />
    </div>
  )
}

export default Claudinary