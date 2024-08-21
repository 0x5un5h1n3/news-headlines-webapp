import NewsList from '../components/NewsList'; // Make sure this path is correct
import Header from '../components/Header'; // Make sure this path is correct

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Latest News</h1>
                <NewsList />
            </div>
        </div>
    );
};

export default Home;
