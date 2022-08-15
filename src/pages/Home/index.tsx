import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Input } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name, setName } = useModel('global');
  const { count, setCount } = useModel('count');

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button onClick={() => setCount(count + 1)}>{count}</Button>
      </div>
    </PageContainer>
  );
};

export default HomePage;
