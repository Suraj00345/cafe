import React from 'react';

const images = [
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ffb72d82-8b6c-4c7d-acc8-6825f0316b4d.png", alt: "Italian dish in a black pan garnished with tomatoes and fresh basil leaves" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f118df9a-1455-4aa2-9306-b8259ad09e69.png", alt: "Fresh Greek salad with olives, feta cheese, cherry tomatoes and cucumber on a wooden board" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6271bb73-a420-4114-9a2f-954142c60d1d.png", alt: "Gourmet plated food with artistic sauce decoration on a gray ceramic plate" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5641d93a-42c6-4d5b-baa2-ffe4510ee3df.png", alt: "Female chef in white uniform seasoning a dish in a fine dining kitchen" },
  { src: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Male chef with black uniform grating cheese over a meal in a restaurant kitchen" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a9632c7a-1245-47a1-80a3-807bd87ae958.png", alt: "Blue ceramic plate with a fruit tart dessert garnished with fresh berries and cream" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/162c76c1-2c14-4a23-8c81-a45bb79d4c8d.png", alt: "Plates of gourmet burgers served with fries on a dark tabletop" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/64b84a46-a639-4fef-a31f-b917166b884a.png", alt: "Minimalist presentation of a slice of green tea cake on a teal ceramic plate" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a82328b8-c372-43aa-bb8e-cf0f2796de27.png", alt: "Outdoor picnic table set with plates, drinks and flower centerpiece with a nature background" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6359b579-5a45-4617-9b10-ad49ccd5a3b4.png", alt: "Woman eating a carefully plated meal sitting at a rustic wooden table indoors" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9fbb1868-d30e-4204-9b4e-f745614e98cd.png", alt: "Blue plates with roasted chicken, sweet potatoes, and diced vegetables on stone slab" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f5be1f53-dbf4-4402-a2e6-77c50d68bb25.png", alt: "Close-up of hands holding fresh green spruce tree branch outdoors in winter" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e225d304-b1e5-4e76-9a64-0c57471a93fc.png", alt: "Bowl with mixed salad, tomato slices and greens in a modern style setting" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05ac1496-340b-4b9a-8481-3f036c788def.png", alt: "Two blue plates with sophisticated salmon dishes sprinkled with herbs" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c47226b6-39cf-419b-afc1-7185d5ef2e34.png", alt: "Vibrant salad with greens, nuts, and berries arranged artistically on white plate" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4bbb543f-fb73-472b-91e3-c45f54d5fd31.png", alt: "Decorated garden dinner table set under hanging string lights and trees" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/422bb542-98d5-4cf4-9c72-9b66a21c6433.png", alt: "Smiling young chef wearing apron standing in a cozy restaurant kitchen" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a9a233e5-bfda-4e30-9171-5cda635946ed.png", alt: "Elegant outdoor dining table with flower centerpiece and candles in glass holders" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7603c50b-42c5-483d-a485-32cf28b42770.png", alt: "Dish plated with creamy white sauce garnished with pomegranate seeds and herbs" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/de77f39c-8a97-4173-892f-b02a0bd9c163.png", alt: "Modern upscale restaurant interior with stylish lighting and empty seating" },
  { src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e02a09d7-28b5-4543-995f-83cbf6468927.png", alt: "Colorful grain bowl with fresh vegetables served in a blue ceramic bowl" }
];

export default function FoodGallery() {
  return (
    <div className="bg-black p-4 h-183 -mb-62">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-35 object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
              onError={e => {
                e.currentTarget.onerror = null; 
                e.currentTarget.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3637e29d-8957-4db7-9e35-a97935662ab9.png';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

