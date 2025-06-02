import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* Carousel */}
      <div className="flex flex-col items-center justify-center w-full max-w-sm p-4">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex items-center justify-center h-48 w-auto bg-black rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/lQNLBBFjqMk"
                  title="TUTORIAL PENDAFTARAN ONLINE PPTQAM"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full "
                ></iframe>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex items-center justify-center h-48 w-auto bg-black rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/esXqghbEKNw"
                  title="SEKOLAH PARA JUARA | PPTQ Al-'Ashr Al-Madani"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full "
                ></iframe>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* 2 Row 4 Column */}
      <div className="grid grid-cols-4 gap-4 mt-8">
        {/* PPDB */}
        <a href="/PPDB">
          <img
            src="/ppdb_icon_menu.svg"
            alt="PPDB"
            className="cursor-pointer transition-transform hover:scale-105"
          />
        </a>

        {/* Gallery */}
        <a href="">
          <img
            src="/gallery_icon_menu.svg"
            alt="Gallery"
            className="cursor-pointer transition-transform hover:scale-105"
          />
        </a>
        {/* Kegiatan */}
        <a href="">
          <img
            src="/kegiatan_icon_menu.svg"
            alt="Kegiatan"
            className="cursor-pointer transition-transform hover:scale-105"
          />
        </a>
        {/* Infaq PPDB */}
        <a href="">
          <img
            src="/infaq_ppdb_icon_menu.svg"
            alt="Infaq PPDB"
            className="cursor-pointer transition-transform hover:scale-105"
          />
        </a>
        {/* Brosur */}
        <a href="">
          <img
            src="/brosur_icon_menu.svg"
            alt="Brosur"
            className="cursor-pointer transition-transform hover:scale-105"
          />
        </a>
        {/* Fasilitas */}
        <a href="">
          <img
            src="/fasilitas_icon_menu.svg"
            alt="Fasilitas"
            className="cursor-pointer transition-transform hover:scale-105"
          />
        </a>
        {/* Daftar */}
        <a href="">
          <img
            src="/daftar_icon_menu.svg"
            alt="Daftar"
            className="cursor-pointer transition-transform hover:scale-105"
          />
        </a>
        {/* Menu Lain */}
        <a href="">
          <img
            src="/menu_lain_icon_menu.svg"
            alt="Menu Lain"
            className="cursor-pointer transition-transform hover:scale-105"
          />
        </a>
      </div>

      {/* h1 Roadmap Pendaftaran*/}
      <div className="w-full max-w-sm">
        <h1 className="font-bold text-left mt-8 text-6xl">
          Roadmap Pendaftaran
        </h1>
        <p className="mt-4 text-gray-600">
          Berikut tatacara pendaftaran memalui website pptqam.ponpes.id
        </p>
      </div>

      {/* Footer */}
    </main>
  );
}
