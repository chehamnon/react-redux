import React, {PropTypes} from 'react';
import TextInput from './common/TextInput';

const CompetencyForm = ({competency, onSave, onDelete, onChange, saving, errors}) => {
	return (
		<form>
			<TextInput
				name="name"
				label="Competency Name"
				value= {competency.name}
				onChange={onChange}
				error={errors}
			/>
			
			<TextInput
			name="previous"
			label="Previous Result"
			value= {competency.previous}
			onChange={onChange}
			error={errors}
			/>
			
			<TextInput
			name="latest"
			label="Current Result"
			value= {competency.latest}
			onChange={onChange}
			error={errors}
			/>
			
			<TextInput
			name="note"
			label="Note"
			value= {competency.note}
			onChange={onChange}
			error={errors}
			/>
		
            <input
            type="submit"
            disabled={saving}
            value={saving ? "Saving..." : "Save"}
            className="btn btn-success"
            onClick={onSave}
			/>
		</form>
	);
};

CompetencyForm.propTypes = {
		competency: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		saving: React.PropTypes.bool,
		errors: React.PropTypes.object
};

export default CompetencyForm;