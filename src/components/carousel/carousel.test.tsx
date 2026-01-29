import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./carousel";

const mockImageUrls = [
  { url: "/images/test1.jpg" },
  { url: "/images/test2.jpg" },
  { url: "/images/test3.jpg" },
];

beforeEach(() => {
  // Mock IntersectionObserver
  global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Carousel", () => {
  it("should disable left button when at start position", () => {
    render(<Carousel imageUrls={mockImageUrls} />);

    const leftButton = screen.getByRole("button", {
      name: /Scroll Carousel Left/i,
    });

    expect(leftButton).toBeDisabled();
  });

  it("should enable both buttons when in middle position", () => {
    render(<Carousel imageUrls={mockImageUrls} />);

    const carousel = screen.getByTestId("carousel");

    // Simulate scroll to middle position
    Object.defineProperty(carousel, "scrollLeft", {
      value: 100,
      writable: true,
    });
    Object.defineProperty(carousel, "scrollWidth", {
      value: 1000,
      writable: true,
    });
    Object.defineProperty(carousel, "clientWidth", {
      value: 500,
      writable: true,
    });

    fireEvent.scroll(carousel);

    const leftButton = screen.getByRole("button", {
      name: /Scroll Carousel Left/i,
    });
    const rightButton = screen.getByRole("button", {
      name: /Scroll Carousel Right/i,
    });

    expect(leftButton).not.toBeDisabled();
    expect(rightButton).not.toBeDisabled();
  });

  it("should disable right button when at end position", () => {
    render(<Carousel imageUrls={mockImageUrls} />);

    const carousel = screen.getByTestId("carousel");

    // Simulate scroll to end position
    Object.defineProperty(carousel, "scrollLeft", {
      value: 500,
      writable: true,
    });
    Object.defineProperty(carousel, "scrollWidth", {
      value: 1000,
      writable: true,
    });
    Object.defineProperty(carousel, "clientWidth", {
      value: 500,
      writable: true,
    });

    fireEvent.scroll(carousel);

    const rightButton = screen.getByRole("button", {
      name: /Scroll Carousel Right/i,
    });
    expect(rightButton).toBeDisabled();
  });

  it("should open modal when an image card is clicked", () => {
    // Mock showModal since it's not available in jsdom
    const mockShowModal = jest.fn();
    HTMLDialogElement.prototype.showModal = mockShowModal;

    render(<Carousel imageUrls={mockImageUrls} />);

    const dialog = screen.getByTestId("modal-dialog");
    expect(dialog).toBeInTheDocument();

    // Get all image cards - they are buttons containing images
    const imageButtons = screen.getAllByRole("button", { name: "View Image" });

    fireEvent.click(imageButtons[0]);

    // Click the first image card
    expect(imageButtons.length).toBe(mockImageUrls.length);

    // Verify modal content rendered
    expect(mockShowModal).toHaveBeenCalledTimes(1);
  });
});
