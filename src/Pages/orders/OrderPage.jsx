import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cover from '../../Share/Cover';
import oderpageImage from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTabs from './OrderTabs';

const OrderPage = () => {
    const categories = ['soup', 'pizza', 'dessert', 'salad', 'drinks'];
    const { category } = useParams();
   
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    useEffect(() => {
        setTabIndex(categories.indexOf(category));
    }, [category]);

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover img={oderpageImage} title={'order food'} />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '60px' }}>
                    <Tab>Soup</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderPage;
