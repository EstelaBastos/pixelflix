import React from 'react';

function FormField({label, value, onChange, name, type}) {
    return (
        <div>
            <label>
                {label}<input type={type || "text"} value={value} name={name}  onChange={onChange} />
            </label>
        </div>
    );
}

export default FormField;