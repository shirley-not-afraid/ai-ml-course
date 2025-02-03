import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';

// 样式组件
const Header = styled.header`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #2e8b57 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
`;

const Navigation = styled.nav`
  background: #f8f9fa;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  &:hover {
    color: #2e8b57;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// 页面组件
const Home = () => (
  <Content>
    <h2>课程简介</h2>
    <p>本课程将概述机器学习的基本概念和算法。通过数学和编程练习来加深对这些概念和算法的理解。</p>
  </Content>
);

const Syllabus = () => (
  <Content>
    <h2>课程内容</h2>
    <ul>
      <li>机器学习及其应用简介</li>
      <li>监督学习：线性和非线性回归</li>
      <li>监督学习：逻辑回归和多类分类</li>
      {/* 其他课程内容 */}
    </ul>
  </Content>
);

const Instructors = () => (
  <Content>
    <h2>授课教师</h2>
    {/* 教师信息 */}
  </Content>
);

const App = () => {
  return (
    <Router>
      <div>
        <Header>
          <h1>人工智能与机器学习</h1>
          <p>牛津国际留学项目</p>
        </Header>

        <Navigation>
          <NavLink to="/">首页</NavLink>
          <NavLink to="/syllabus">课程内容</NavLink>
          <NavLink to="/instructors">授课教师</NavLink>
        </Navigation>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/instructors" element={<Instructors />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;