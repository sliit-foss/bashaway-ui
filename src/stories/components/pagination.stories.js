import { Pagination as PaginationComponent } from "@/components";

const argTypes = {
  totalPages: {
    description: "The total number of pages"
  },
  currentPage: {
    description: "The current page"
  },
  onPageChange: {
    description: "A function to be called when the page changes"
  }
};
export default {
  title: "Components/Pagination",
  component: PaginationComponent,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export const Pagination = {
  argTypes,
  args: {
    totalPages: 3,
    currentPage: 1,
    onPageChange: () => {}
  }
};
