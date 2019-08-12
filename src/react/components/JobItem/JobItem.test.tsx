import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect as expectChai } from "chai";
import JobItem from "./JobItem";

configure({ adapter: new Adapter() });

describe("JobItem", () => {
    it("should render component", () => {
        const component = shallow(
            <JobItem
                job={{
                    title: "Test Job",
                    description: "Job Description",
                    company: {
                        name: "Uplearn"
                    },
                    cities: []
                }}
            />
        );

        expect(component.getElements()).toMatchSnapshot();
        expectChai(component.find(".Title")).to.have.lengthOf(1);
        expectChai(component.find(".Title").text()).to.equal("Test Job");
    });
});
