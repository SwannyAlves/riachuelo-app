import { FooterCustom } from "./styles";
import FooterContact from "./Contact/Contact";
import FooterLinks from "./Link/Link";
import FooterPayment from "./Payment/Payment";
import FooterBottom from "./Bottom/Bottom";

function Footer() {
  return (
    <FooterCustom>
      <FooterContact />
      <FooterLinks />
      <FooterPayment />
      <FooterBottom />
    </FooterCustom>
  );
}

export default Footer;
