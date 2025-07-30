export const BREAKPOINTS = {
  desktop: {
    containerClasses: "max-[1120px]:hidden absolute w-[600px] h-[600px] items-center justify-center translate-x-[15%] flex z-[10]",
    rotatingClasses: "max-[1120px]:hidden absolute min-w-[600px] h-[600px] border border-dashed border-[#898989] rounded-[50%] flex items-center justify-center translate-x-[15%]",
    translateDistance: -300,
    activeTranslateDistance: -485,
    circleSize: "w-[80px] h-[80px]",
    iconScale: "",
    activeWidth: "w-[450px]",
    activeMinWidth: "min-w-[370px]",
    titleSize: "text-2xl",
    textSize: "text-[16px]",
    lamaScale: "",
    shadowScale1: "scale-[1.4]",
    shadowScale2: "scale-[1.8]",
    borderRadius: "rounded-[30px]"
  },
  tablet: {
    containerClasses: "min-[1120px]:hidden max-[900px]:hidden absolute w-[500px] h-[500px] items-center justify-center translate-x-[10%] flex z-[10]",
    rotatingClasses: "min-[1120px]:hidden max-[900px]:hidden absolute min-w-[450px] h-[450px] border border-dashed border-[#898989] rounded-[50%] flex items-center justify-center translate-x-[15%]",
    translateDistance: -220,
    activeTranslateDistance: -380,
    circleSize: "w-[65px] h-[65px]",
    iconScale: "scale-[0.8]",
    activeWidth: "w-[380px]",
    activeMinWidth: "min-w-[250px]",
    titleSize: "text-xl",
    textSize: "text-[13px]",
    lamaScale: "scale-[0.8]",
    shadowScale1: "scale-[1.1]",
    shadowScale2: "scale-[1.5]",
    borderRadius: "rounded-[20px]",
    iconPadding: "!p-5"
  },
  mobile: {
    containerClasses: "min-[900px]:hidden max-[700px]:translate-x-[-6%] max-[650px]:translate-x-[-50%] absolute w-[400px] h-[400px] items-center justify-center translate-x-[7%] flex z-[10]",
    rotatingClasses: "min-[900px]:hidden max-[460px]:hidden max-[700px]:translate-x-[0%] max-[650px]:translate-x-[-50%] duration-1000 absolute min-w-[350px] h-[350px] border border-dashed border-[#898989] rounded-[50%] flex items-center justify-center translate-x-[15%]",
    translateDistance: -175,
    activeTranslateDistance: -295,
    circleSize: "w-[60px] h-[60px]",
    iconScale: "",
    activeWidth: "w-[300px]",
    activeMinWidth: "min-w-[200px]",
    titleSize: "text-base",
    textSize: "text-[10px]",
    lamaScale: "scale-[0.6]",
    shadowScale1: "scale-[0.9]",
    shadowScale2: "scale-[1.2]",
    borderRadius: "rounded-[20px]",
    iconPadding: "!p-6"
  },
  small: {
    containerClasses: "min-[460px]:hidden z-[60] max-[700px]:translate-x-[0%] max-[650px]:translate-x-[-50%] duration-1000 absolute min-w-[350px] h-[350px] rounded-[50%] flex items-center justify-center translate-x-[15%]",
    rotatingClasses: "min-[460px]:hidden z-[60] max-[700px]:translate-x-[0%] max-[650px]:translate-x-[-50%] duration-1000 absolute min-w-[350px] h-[350px] rounded-[50%] flex items-center justify-center translate-x-[15%]",
    translateDistance: -140,
    activeTranslateDistance: -260,
    circleSize: "w-[60px] h-[60px]",
    iconScale: "",
    activeWidth: "w-[250px]",
    activeMinWidth: "min-w-[100px]",
    titleSize: "text-base",
    textSize: "text-[10px]",
    lamaScale: "scale-[0.6]",
    shadowScale1: "scale-[0.9]",
    shadowScale2: "scale-[1.2]",
    borderRadius: "rounded-[20px]",
    iconPadding: "!p-6",
    noMaxHeight: true
  }
};

export interface DeviceConfig {
  containerClasses: string;
  rotatingClasses: string;
  translateDistance: number;
  activeTranslateDistance: number;
  circleSize: string;
  iconScale: string;
  activeWidth: string;
  activeMinWidth: string;
  titleSize: string;
  textSize: string;
  lamaScale: string;
  shadowScale1: string;
  shadowScale2: string;
  borderRadius: string;
  iconPadding?: string;
  noMaxHeight?: boolean;
}