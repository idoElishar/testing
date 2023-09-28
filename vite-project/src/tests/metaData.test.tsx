import { render, screen } from "@testing-library/react";
import MetaData from "../comp/metaData";

const props = {
  qrCodeUrl: "https://example.com/qr-code",
  date: "2023-09-27",
};

describe("MetaData Component", () => {
  test("renders QR Code URL", () => {
    render(<MetaData {...props} />);
    const qrCodeUrlElement = screen.getByText(/QR Code URL:/i);
    expect(qrCodeUrlElement).toBeInTheDocument();
  });

  test("renders Date", () => {
    render(<MetaData {...props} />);
    const dateElement = screen.getByText(/Date:/i);
    expect(dateElement).toBeInTheDocument();
  });

  test("renders Size", () => {
    render(<MetaData {...props} />);
    const sizeElement = screen.getByText(/Size: 100X100/i);
    expect(sizeElement).toBeInTheDocument();
  });
});
