import Dropdown from 'react-bootstrap/Dropdown';
import '@/app/styles/dropdown.css';

function DropDown() {
	return (
		<div className='d-flex xsmall-dropdown'>
			<Dropdown
				className='d-flex align-items-center'
				title='hello'>
				<Dropdown.Toggle
					size='lg'
					className='justify-items-end'
					variant='danger'
					id='dropdown-basic'>
					Контакты
				</Dropdown.Toggle>
				<Dropdown.Menu
					className=''
					variant='light'>
					<Dropdown.Item
						href='https://t.me/+ouEHkbTLWWE2NmQ6'
						id='dropdown-item'>
						Телеграм
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
}

export default DropDown;
