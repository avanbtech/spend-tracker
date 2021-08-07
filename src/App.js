import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

const App = () => {
	const expenses = [
		{ id: 'e1', title: 'Toilet paper', amount: 94.12, date: new Date(2021, 7, 14) },
		{ id: 'e2', title: 'pasta', amount: 4.56, date: new Date(2021, 7, 14) },
		{ id: 'e3', title: 'paper', amount: 9.2, date: new Date(2021, 8, 1) },
		{ id: 'e4', title: 'pen', amount: 1.65, date: new Date(2021, 7, 4) }
	];
	return (
		<div>
			<NewExpense />
            <Expenses items={expenses}></Expenses>
		</div>
	);
}

export default App;
