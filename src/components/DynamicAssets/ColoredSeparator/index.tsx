import { FC, SVGProps } from "react";

const ColoredSeparator: FC<SVGProps<SVGSVGElement> & { isWhite?: boolean }> = (
  props
) => {
  const { isWhite, ...rest } = props;

  return (
    <svg
      width={1096}
      height={97}
      fill={isWhite ? "#FFFFFF" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1096 97"
      {...rest}
    >
      <path
        d="M802.251 48.38 791.51 36.315 780.769 48.38l10.741 12.064 10.741-12.064ZM315.245 48.383 304.504 36.32l-10.741 12.063 10.741 12.064 10.741-12.064ZM36.092 48.377l-6.705-7.53-6.706 7.53 6.706 7.53 6.705-7.53ZM1073.33 48.381l-6.7-7.53-6.71 7.53 6.71 7.531 6.7-7.53Z"
        fill={isWhite ? "#FFFFFF" : "#D6B66B"}
      />
      <path
        d="m354.647 38.24-3.74-9.97-15.225 18.92h11.762l7.203-8.95Z"
        fill={isWhite ? "#FFFFFF" : "#179999"}
      />
      <path
        d="M346.971 49h-11.762l15.706 19.5 3.873-9.79-7.817-9.71Z"
        fill={isWhite ? "#FFFFFF" : "#0B7373"}
      />
      <path
        d="m356.266 59.44-3.873 9.8h186.925l-8.717-9.8H356.266ZM739.974 59.44H565.638l-8.726 9.8h186.935l-3.873-9.8Z"
        fill={isWhite ? "#FFFFFF" : "#004040"}
      />
      <path
        d="M749.028 47.48h11.762l-15.466-19.21-3.73 9.96 7.434 9.25Z"
        fill={isWhite ? "#FFFFFF" : "#0B7373"}
      />
      <path
        d="m740.187 37.32 3.669-9.8H556.912l8.726 9.8h174.549ZM352.375 27.52l3.677 9.8h174.55l8.716-9.8H352.375Z"
        fill={isWhite ? "#FFFFFF" : "#179999"}
      />
      <path
        d="M567.25 57.63h172.884l7.453-9.25-7.453-9.25H567.25l8.236 9.25-8.236 9.25ZM528.982 39.13H356.098l-7.444 9.25 7.444 9.25h172.893l-8.245-9.25 8.236-9.25Z"
        fill={isWhite ? "#FFFFFF" : "#0B7373"}
      />
      <path
        d="m741.443 58.71 3.873 9.79 15.475-19.21h-11.762l-7.586 9.42Z"
        fill={isWhite ? "#FFFFFF" : "#004040"}
      />
      <path
        d="m548.134 35.19-11.767 13.215 11.767 13.216 11.767-13.216-11.767-13.216Z"
        fill={isWhite ? "#FFFFFF" : "#D6B66B"}
      />
      <path
        d="m547.119 63.64-12.59-14.14h-9.973l22.563 25.34v-11.2Z"
        fill={isWhite ? "#FFFFFF" : "#B39859"}
      />
      <path
        d="m549.113 33.12 12.59 14.14h9.972l-22.562-25.34v11.2Z"
        fill={isWhite ? "#FFFFFF" : "#EDD395"}
      />
      <path
        d="M547.119 33.12v-11.2l-22.563 25.34h9.973l12.59-14.14Z"
        fill={isWhite ? "#FFFFFF" : "#D6B66B"}
      />
      <path
        d="M549.113 63.64v11.2l22.562-25.34h-9.972l-12.59 14.14Z"
        fill={isWhite ? "#FFFFFF" : "#B39859"}
      />
      <path
        d="M791.51 48.38h275.11M29.383 48.38H304.49"
        stroke={isWhite ? "#FFFFFF" : "#D6B66B"}
        strokeWidth={3.9}
        strokeMiterlimit={10}
      />
    </svg>
  );
};

export default ColoredSeparator;
