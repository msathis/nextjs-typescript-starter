import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect as expectChai } from "chai";

import JobListing from "./JobListing";
import JobItem from "../JobItem/JobItem";

configure({ adapter: new Adapter() });

describe("JobListing", () => {
  it("should render component", () => {
    const component = shallow(
      <JobListing
        onSelect={() => {}}
        jobs={[
          {
            id: 1,
            title: "Test Job 1"
          },
          {
            id: 2,
            title: "Test Job 2"
          }
        ]}
      />
    );

    expect(component.getElements()).toMatchSnapshot();
    expectChai(component.find(JobItem)).to.have.lengthOf(2);
  });
});
