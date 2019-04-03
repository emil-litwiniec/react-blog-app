import Enzyme from "enzyme";
import DotEnv from "dotenv";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
    adapter: new Adapter()
});

DotEnv.config({ path: ".env.test" });
