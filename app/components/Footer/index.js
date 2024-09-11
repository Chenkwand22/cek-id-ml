import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <h6 className="text-md text-center">
        By{" "}
        <Link
          href="https://www.instagram.com/chenkwand_/"
          target="_blank"
          className="underline"
        >
          @Chenkwand
        </Link>
      </h6>
    </div>
  );
};

export default Footer;
