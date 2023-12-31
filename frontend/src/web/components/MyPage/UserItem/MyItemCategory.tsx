import styles from './UserItem.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMyItemType } from '../../../store/myItemCategorySlice';


const MyItemCategory: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>('아이콘');
    const dispatch = useDispatch();

    const handleRadioChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    useEffect(() => {
        dispatch(setMyItemType(selectedValue));
    }, [selectedValue, dispatch]);

    return (
        <div>
            <div className={styles['radio-input']}>
                <label>
                    <input 
                        type="radio" 
                        id="value-1" 
                        name="value-radio" 
                        value="아이콘" 
                        checked={selectedValue === "아이콘"}
                        onChange={handleRadioChange} 
                    />
                    <span>아이콘</span>
                </label>
                <label>
                    <input 
                        type="radio" 
                        id="value-2" 
                        name="value-radio" 
                        value="말풍선" 
                        checked={selectedValue === "말풍선"}
                        onChange={handleRadioChange} 
                    />
                    <span>말풍선</span>
                </label>
                <label>
                    <input 
                        type="radio" 
                        id="value-3" 
                        name="value-radio" 
                        value="화면효과" 
                        checked={selectedValue === "화면효과"}
                        onChange={handleRadioChange} 
                    />
                    <span>화면효과</span>
                </label>
                <label>
                    <input 
                        type="radio" 
                        id="value-4" 
                        name="value-radio" 
                        value="음성효과" 
                        checked={selectedValue === "음성효과"}
                        onChange={handleRadioChange} 
                    />
                    <span>음성효과</span>
                </label>
                    <span className={styles['selection']}></span>
                </div>
        </div>
    )
};

export default MyItemCategory;