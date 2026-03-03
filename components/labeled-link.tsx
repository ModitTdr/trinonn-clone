import Link from "next/link";

interface props {
  label: string;
  value: string;
  href?: string;
  labelClass?: string;
  valueClass?: string;
}

const LabeledLink = ({
  label,
  value,
  href = '#',
  labelClass,
  valueClass,
}: props) => {
  return (
    <Link href={href}>
      <h4 className={`text-[1rem] lg:text-[1.3vw] leading-none text-foreground/80 ${labelClass}`}>
        {label}
      </h4>
      <p className={`text-[1.4rem] lg:text-[2vw] ${valueClass}`}>
        {value}
      </p>
    </Link>
  );
};

export default LabeledLink;