import { useState } from 'react';
import styled from 'styled-components';
import { ChevronDoubleRight, ChevronDoubleLeft } from 'react-bootstrap-icons';
import Modal from 'react-modal';
import CSS from 'csstype';
import { CreatorInfo } from '@/pages/api/v1/creator-infos/list';
import CreatorList from '@/ui/CreatorList';

const Container = styled.div`
    display: flex;
    position: fixed;
`;

const ToggleButton = styled.button`
    background: none;
    border: none;
    padding: 8px;
`;

const OpenIcon = styled(ChevronDoubleRight)`
    color: gray;
`;

const ModalContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const modalStyle: CSS.Properties = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        top: '0',
        left: '0',
        margin: '0',
        padding: '0',
        border: 'none',
        height: '100%',
        width: '283px',
    },
};

export default function AsideToggle(props: {creatorInfos: CreatorInfo[]}) {
    const [modalOpen, setModalOpen] = useState(false);

    const onClickOpen = () => { setModalOpen(true); };
    const onClickClose = () => { setModalOpen(false); };

    return (
        <Container>
            <Modal
                isOpen={modalOpen}
                onRequestClose={onClickClose}
                style={modalStyle}
            >
                <ModalContainer>
                    <CreatorList creatorInfos={props.creatorInfos} />
                </ModalContainer>
            </Modal>
            <ToggleButton onClick={onClickOpen} >
                <OpenIcon />
            </ToggleButton>
        </Container>
    );
}
