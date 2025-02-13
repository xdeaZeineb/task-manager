import { TaskProvider } from "@/contexts/taskContext";
import Layout from "@/components/ui/Layout";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";

const Home = () => {
  return (
    <TaskProvider>
      <Layout>
        <AddTask />
        <TaskList />
      </Layout>
    </TaskProvider>
  );
};

export default Home;
