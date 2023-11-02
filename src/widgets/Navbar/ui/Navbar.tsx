import classNames from "classnames";
import cls from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import {ContentContainer} from "src/shared/ui/ContentContainer/ContentContainer";


interface NavbarProps {
	className?: string
}

export const Navbar = (props: NavbarProps) => {
	const {className} = props;

	return (
			<div className={classNames(cls.navbar, className)}>
				<ContentContainer>
					<nav>
						<ul>
							<li>
								<NavLink
										to='/'
										className={({ isActive }) =>
												isActive ? cls.active : ''
										}
								>
									Main page
								</NavLink>
							</li>
							<li>
								<NavLink to='/create' className={({ isActive }) =>
										isActive ? cls.active : ''
								}>Create page</NavLink>
							</li>
						</ul>
					</nav>
				</ContentContainer>
			</div>
	);
};