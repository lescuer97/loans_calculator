import React, { useContext } from "react";
import ResultContext from "../../context/result/ResultContext";
import { Helmet } from "react-helmet";

import ChartPie from "../charts/ChartPie";

const Result = () => {
  const resultContext = useContext(ResultContext);
  const { result } = resultContext;

  if (!result[0]) {
    return (
      <div>
        <h1>We have no data for you</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" name="calculadora" content="Resultado" />
          <meta name="author" content="Leonardo Escuer" />;
          <title>Resultados</title>
        </Helmet>

        <div className="flex flex-col justify-center md:flex md:flex-row">
          <div className="flex flex-wrap justify-center">
            <div>
              {!result[0] ? (
                <div></div>
              ) : (
                <div className="flex flex-col md:flex-row">
                  <div className="card md:mt-0 md:mx-3 px-3 mx-3 md:w-1/4 ">
                    <p className="card-tittle py-5">
                      <strong>Datos Normales</strong>
                    </p>
                    <ChartPie
                      // graphdat={result[0][0]}
                      mortiData={result[0][0]}
                      precio={result[2]}
                    />
                  </div>

                  <div className="card md:mt-0 md:mx-3 px-3 mx-3 md:w-1/4 ">
                    <h3 className="card-tittle py-5 ">
                      {" "}
                      <strong>20% mas ahorro</strong>
                    </h3>{" "}
                    <ChartPie
                      // graphdat={result[0][1]}
                      mortiData={result[0][1]}
                      precio={result[2]}
                    />{" "}
                  </div>

                  <div className="card md:mt-0 md:mx-3 px-3 mx-3  md:w-1/4 ">
                    {" "}
                    <h3 className="card-tittle">
                      <strong>20% menos tiempo de hipoteca</strong>
                    </h3>{" "}
                    <ChartPie
                      // graphdat={result[0][2]}
                      mortiData={result[0][2]}
                      precio={result[2]}
                    />
                  </div>

                  <div className="card md:mt-0 md:mx-3 px-3 mx-3 md:w-1/4  ">
                    <h3 className="card-tittle">
                      <strong> menos tiempo y mas ahorro</strong>
                    </h3>{" "}
                    <ChartPie
                      // graphdat={result[0][3]}
                      mortiData={result[0][3]}
                      precio={result[2]}
                    />{" "}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* {!mortiTable ? <div></div> : <Table mort={mortiTable} />} */}
      </div>
    );
  }
};

export default Result;
