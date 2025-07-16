export interface HomePageMessages {
  HomePageMain: {
    Upper: {
      List: {
        Item1: string;
        Item2: string;
        Item3: string;
        Item4: string;
      };
    };
    Middle: {
      Title: string;
      Text1: string;
      Text2: string;
      Text3: string;
      Text4: string;
    };
    Info: {
      Title1: string;
      Title2: string;
      Text1: string;
      Text2: string;
      Text3: string;
      Text4: string;
      Text5: string;
    };
    News: {
      Title: string;
    };
    Enrollment: {
      Title1: string;
      Title2: string;
      More: string;
    };
  };
  Header: {
    HeaderList: {
      List1: {
        Item4: string;
      };
    };
  };
  Institute: {
    News: {
      ListMain: {
        More: string;
      };
    };
  };
}

export interface ButtonItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface CarouselSlide {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HomePageMainProps {
  messages: HomePageMessages;
  lang: "en" | "ru" | "kg";
}
