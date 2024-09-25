export interface TypeDataTranslate {
    data: Data
  }
  
  export interface Data {
    Link: Link
    Header: Header
    Layanan: Layanan
    Profile: Profile
  }
  
  export interface Link {
    Layanan: string
    Profile: string
    VisiMisi: string
    Testimoni: string
  }
  
  export interface Header {
    subTitle: string
    title: string
    description: string
  }
  
  export interface Layanan {
    title: string
    PengurusanVisa: PengurusanVisa
    Terhubung: Terhubung
    InterpretasiPenerjemah: InterpretasiPenerjemah
    StudiBunding: StudiBunding
    SekolahBahasaJepang: SekolahBahasaJepang
  }
  
  export interface PengurusanVisa {
    title: string
    description: string
  }
  
  export interface Terhubung {
    title: string
    description: string
  }
  
  export interface InterpretasiPenerjemah {
    title: string
    description: string
  }
  
  export interface StudiBunding {
    title: string
    description: string
  }
  
  export interface SekolahBahasaJepang {
    title: string
    description: string
  }
  
  export interface Profile {
    title: string
    description: string
  }
  