import { Link } from "@nextui-org/link";

export default function Hyperlink({ text, href, ...props }) {
  return (
    <Link isExternal underline="hover" href={href} {...props}>
      {text}
    </Link>
  );
}

import PropTypes from "prop-types";

Hyperlink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
