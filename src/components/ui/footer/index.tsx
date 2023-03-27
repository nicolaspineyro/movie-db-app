import { FooterIcon } from "../../icons";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-5 space-y-2">
      <p className="text-xs text-gray-medium">Nicolas Piñeyro</p>
      <div className="flex items-center">
        <div className="w-10">
          <FooterIcon />
        </div>
        <p className="text-xs text-gray-medium">{`© ${new Date().getFullYear()}`}</p>
      </div>
    </footer>
  );
};

export default Footer;
