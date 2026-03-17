import { LayoutPolicies } from "@/components/layout/layout-policeis";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return <LayoutPolicies>{children}</LayoutPolicies>;
}
