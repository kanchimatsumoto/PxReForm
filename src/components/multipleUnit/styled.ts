import { styled } from "@mui/system";

export const Root = styled("div")({
  width: "500px",
  height: "500px",
  position: "relative",
});

export const Header = styled("header")({
  backgroundColor: "gray",
  display: "flex",
  padding: "8px",
});

export const Title = styled("h1")({
  flexGrow: "1",
  fontSize: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#D1D5DB",
});

export const FlexContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "middle",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateY(-50%) translateX(-50%)",
  gap: "3rem",
  width: "400px",
  height: "200px",
});

export const PxRemFieldWrapper = styled("div")({
  display: "flex",
  gap: "20px",
});
