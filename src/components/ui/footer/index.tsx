import { FooterIcon } from "../../icons";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-medium justify-center items-center p-5 space-y-2">
      <p className="text-xs text-gray-light">Nicolas Piñeyro</p>
      <div className="flex items-center">
        <div className="w-10">
          <FooterIcon />
        </div>
        <p className="text-xs text-gray-light">{`© ${new Date().getFullYear()}`}</p>
      </div>
    </footer>
  );
};

export default Footer;
