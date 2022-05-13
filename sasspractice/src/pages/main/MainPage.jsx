import React from "react";
import Axios from "axios";
import * as S from "./style";
const MainPage = () => {
  const [list, setList] = React.useState([]);

  const testAxios = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  const getUserAPI = async () => {
    try {
      const res = await testAxios.get("users");

      if (res?.status === 200) {
        if (res?.data.length > 0) setList(res.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    getUserAPI();
  }, []);

  return (
    <S.Container>
      <S.Ul>
        {list?.map((item) => (
          <S.Li key={item.id}>
            <S.DIV>{item.name}</S.DIV>
          </S.Li>
        ))}
      </S.Ul>
    </S.Container>
  );
};

export default MainPage;
