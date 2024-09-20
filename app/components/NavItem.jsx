import Link from "next/link";

export default function NavItem({ label, path, data_test }) {
  return (
    <Link data-test={data_test} href={path}>
      {label}
    </Link>
  );
}
