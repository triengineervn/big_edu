import Icon from "../../assets/images/icons";

const Footer = () => {
  return (
    <footer className="bg-black opacity-85 shadow-md text-white">
      <div className="px-16 py-8 ">
        <div className="flex justify-between">
          <div className="grid grid-cols-3 gap-x-32 gap-y-2">
            <div>Big Education Business</div>
            <div>Careers</div>
            <div>Terms</div>
            <div>Teach on Big Education</div>
            <div>Blog</div>
            <div>Privacy policy</div>
            <div>Get the app</div>
            <div>Help and Suport</div>
            <div>Cookie settings</div>
            <div>About us</div>
            <div>Affiliate</div>
            <div>Sitemap</div>
            <div>Contact us</div>
            <div>Investors</div>
            <div>Accessibility statement</div>
          </div>
          <div>
            <button className="bg-black flex opacity-85 text-white px-4 py-2 rounded-none border-white font-bold hover:border-white">
              <Icon
                name="earth"
                className="stroke-white mr-1"
              />
              Language
            </button>
          </div>
        </div>
        <div className="flex justify-between items-end mt-12">
          <img
            src="../../../public/logo/logo-be.svg"
            className="h-24 w-auto"
          />
          <p className="text-xs">© 2024 Big Education, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
