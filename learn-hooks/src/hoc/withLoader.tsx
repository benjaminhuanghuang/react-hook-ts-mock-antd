import React from "react";
import axios from "axios";

interface ILoaderState {
  data: any;
  isLoading: boolean;
}

interface ILoaderProps {
  data: any;
}

const withLoader = <P extends ILoaderState>(WrappedComponent: React.ComponentType<P>, url: string) => {
  return class LoaderComponent extends React.Component<Partial<ILoaderProps>, ILoaderState> {
    constructor(props: any) {
      super(props);
      this.state = {
        data: null,
        isLoading: false,
      };
    }

    componentDidMount() {
      this.setState({
        isLoading: true,
      });

      axios.get(url).then((result: any) => {
        this.setState({
          data: result.data,
          isLoading: false,
        });
      });
    }

    render() {
      const { data, isLoading } = this.state;

      return (
        <>
          {isLoading || !data ? (
            <p>Data is loading</p>
          ) : (
            <WrappedComponent {...(this.props as P)} data={data}></WrappedComponent>
          )}
        </>
      );
    }
  };
};

/* Usage
  const WrappedComponent = withLoader(Component, "props")

  <WrappedComponent/>
*/
