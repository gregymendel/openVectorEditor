import React from "react";
import { connect } from "react-redux";
import AddOrEditPrimerDialog from "../helperComponents/AddOrEditPrimerDialog";
import AddOrEditFeatureDialog from "../helperComponents/AddOrEditFeatureDialog";
import _AddAdditionalEnzymes from "../AddAdditionalEnzymes";
import { withDialog } from "teselagen-react-components";
import { addYourOwnEnzymeClose } from "../redux/addYourOwnEnzyme";

const AddAdditionalEnzymes = withDialog({
  title: "Add Additional Enzymes"
})(_AddAdditionalEnzymes);

export default connect(
  state => {
    return {
      addYourOwnEnzymeIsOpen: state.VectorEditor.addYourOwnEnzyme.isOpen
    };
  },
  {
    addYourOwnEnzymeClose
  }
)(({ editorName, addYourOwnEnzymeIsOpen, addYourOwnEnzymeClose }) => {
  return (
    <div>
      <AddAdditionalEnzymes
        noTarget
        dialogProps={{
          isOpen: addYourOwnEnzymeIsOpen,
          onClose: addYourOwnEnzymeClose
        }}
      />
      <AddOrEditFeatureDialog
        editorName={editorName}
        dialogName="AddOrEditFeatureDialog"
        noTarget
      />{" "}
      <AddOrEditPrimerDialog
        editorName={editorName}
        dialogName="AddOrEditPrimerDialog"
        noTarget
      />{" "}
    </div>
  );
});
