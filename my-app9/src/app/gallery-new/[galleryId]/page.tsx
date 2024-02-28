import galleryData, { GalleryItem } from "@/app/data/galleryData";
import Image from "next/image";

const GalleryDetailPage = ({ params }: any) => {
  const galleryImage = galleryData.find((item: any) => {
    return item.id === params.galleryId;
  });

  return (
    <div>
      {galleryImage && (
        <div>
          <div>Title: {galleryImage.title}</div>
          <div>Description: {galleryImage.description}</div>
          <Image
            src={galleryImage.imgSrc}
            alt={galleryImage.title}
            width={300}
            height={200}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryDetailPage;
