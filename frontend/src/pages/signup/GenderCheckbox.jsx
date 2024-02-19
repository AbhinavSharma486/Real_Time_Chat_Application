import React from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className='label-text text-xl text-white font-semibold '>Male</span>
                    <input
                        type="checkbox"
                        className='checkbox checkbox-warning border-slate-900'
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className='label-text text-xl text-white font-semibold '>Female</span>
                    <input
                        type="checkbox"
                        className='checkbox checkbox-warning border-slate-900'
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;