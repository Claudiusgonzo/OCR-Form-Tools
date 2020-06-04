// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React, { useState } from "react";
import { Modal } from "office-ui-fabric-react/lib/Modal";
import { FontIcon } from "office-ui-fabric-react";
import { ICustomizations, Customizer } from "office-ui-fabric-react/lib/Utilities";
import { getDarkGreyTheme } from "../../../common/themes";
import { strings } from "../../../common/strings";

import "./keyboardShortcuts.scss";

export interface IHotKeysModalState {
    showModal: boolean;
}
interface IKey {
    key: string;
    description: string;
}

export const KeyboardShortcuts: React.FC = () => {
    const dark: ICustomizations = {
        settings: {
            theme: getDarkGreyTheme(),
        },
        scopedSettings: {},
    };

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);

    const shortcutsItems: IKey[] = [
        {
            key: strings.shortcuts.squareBrackets.keys.leftBracket,
            description: strings.shortcuts.squareBrackets.description.prevWord,
        },
        {
            key: strings.shortcuts.squareBrackets.keys.rightBracket,
            description: strings.shortcuts.squareBrackets.description.nextWord,
        },
        {
            key: strings.shortcuts.greaterAndLessThan.keys.lessThan,
            description: strings.shortcuts.greaterAndLessThan.description.prevPage,
        },
        {
            key: strings.shortcuts.greaterAndLessThan.keys.greaterThan,
            description: strings.shortcuts.greaterAndLessThan.description.nextPage,
        },
        {
            key: strings.shortcuts.zoomKeys.keys.minus,
            description: strings.shortcuts.zoomKeys.description.out,
        },
        {
            key: strings.shortcuts.zoomKeys.keys.plus,
            description: strings.shortcuts.zoomKeys.description.in,
        },
        {
            key: strings.shortcuts.zoomKeys.keys.slash,
            description: strings.shortcuts.zoomKeys.description.reset,
        },
        {
            key: strings.shortcuts.deleteAndBackspace.keys.delete,
            description: strings.shortcuts.deleteAndBackspace.description.delete,
        },
        {
            key: strings.shortcuts.deleteAndBackspace.keys.backSpace,
            description: strings.shortcuts.deleteAndBackspace.description.backSpace,
        },

    ];

    const tipsItems = [
        {
            name: strings.shortcuts.tips.quickLabeling.name,
            description: strings.shortcuts.tips.quickLabeling.description,
        },
        {
            name: strings.shortcuts.tips.renameTag.name,
            description: strings.shortcuts.tips.renameTag.description,
        },
        {
            name: strings.shortcuts.tips.multipleWordSelection.name,
            description: strings.shortcuts.tips.multipleWordSelection.description,
        },
    ];
    const ShortcutsListItems = ({ items }): JSX.Element => {
        return items.map((item, idx) => (
            <li key={`${item.key}-${idx}`} className="shortcut">
                <div className="shortcut-description description">{item.description}</div>
                <div className="shortcut-keys">
                    <span
                        className="keyboard-key"
                        aria-label={`keyboard key - ${item.key}`}
                    >{item.key}</span>
                </div>
            </li>));
    };

    const TipsListItems = ({ items }): JSX.Element => {
        return items.map((item, idx) => (
            <li key={`${item.name}-${idx}`}>
                <h6>{item.name}</h6>
                <p className="description">{item.description}</p>
            </li>
        ));
    };

    return (
        <Customizer {...dark}>
            <FontIcon
                className="shortcuts-modal-button"
                iconName="BookAnswers"
                role="button"
                onClick={() => setShowModal(true)}
                title={strings.shortcuts.iconTitle}
            />
            <Modal
                titleAriaId={"Hot Keys Modal"}
                isOpen={showModal}
                onDismiss={closeModal}
                isBlocking={false}
                containerClassName="container"
            >
                <div className="header">
                    <h3>{strings.shortcuts.headers.keyboardShortcuts}</h3>
                    <FontIcon className="close-modal" role="button" onClick={closeModal} iconName="Cancel" />
                </div>
                <div className="content">
                    <div className="shortcuts-list-container">
                        <ul className="shortcuts-list">
                            <ShortcutsListItems items={shortcutsItems} />
                        </ul>
                    </div>
                    <div className="tips-list-container">
                        <h4 >{strings.shortcuts.headers.otherTips}</h4>
                        <ul className="tips-list">
                            <TipsListItems items={tipsItems} />
                        </ul>
                    </div>
                </div>
            </Modal>
        </Customizer>
    );
};
