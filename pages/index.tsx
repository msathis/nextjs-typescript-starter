import Link from "next/link";
import { Query } from "react-apollo";
import React from "react";

import JobListing from "../src/react/components/JobListing";
import { GET_JOBS } from "../src/graphql/queries/job";

class Index extends React.Component {
  setSelected = () => {};

  render() {
    return (
      <div>
        <Query query={GET_JOBS}>
          {({ loading, data }) =>
            !loading && (
              <div className="Jobs">
                <JobListing onSelect={this.setSelected} jobs={data.jobs} />
              </div>
            )
          }
        </Query>

        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    );
  }
}

export default Index;
