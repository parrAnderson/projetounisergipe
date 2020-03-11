import React from 'react'
import Navbar from '../../layouts/Navbar'
import Filter from '../components/FIlterComments'
import Report from '../components/ReportComment'
import { Button, Comment, Card, Icon, Label } from 'semantic-ui-react'
import Footer from '../../layouts/Footer'


const CommentExampleGroupSize = () => (
    <div>
        <Navbar />

        <Filter />

        <Comment.Group size='small'>
            <Card color='green' style={{ left: 250, top: 120, width: 400 }}>
                <Card.Content>
                    <Comment>

                        <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                                <span>Today at 5:42PM</span>
                            </Comment.Metadata>
                            <Comment.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam dui, mollis vel placerat at, feugiat id ex. Duis pharetra pharetra velit id fringilla. Sed tristique, odio blandit ornare consectetur, libero sem maximus leo, eu gravida mauris diam sit amet justo. Phasellus at lectus diam. Nam elemen.</Comment.Text>
                            <Comment.Actions>
                            <Button as='div' labelPosition='right'>
                                    <Button color='green'>
                                        <Icon name='thumbs up' />
                                    </Button>
                                    <Label as='a' basic color='green' pointing='left'>
                                        2,048
                                    </Label>
                                </Button>
                                <Button as='div' labelPosition='right'>
                                    <Button color='red'>
                                        <Icon name='thumbs down' />
                                    </Button>
                                    <Label as='a' basic color='red' pointing='left'>
                                        2,048
                                    </Label>
                                </Button>
                                <Report />
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Card.Content>
            </Card>


            <Card color='green' style={{ left: 250, top: 140, width: 400 }}>
                <Card.Content>
                    <Comment>


                        <Comment.Content>
                            <Comment.Author as='a'>Joe Henderson</Comment.Author>
                            <Comment.Metadata>
                                <span>5 days ago</span>
                            </Comment.Metadata>
                            <Comment.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam dui, mollis vel placerat at, feugiat id ex. Duis pharetra pharetra velit id fringilla. Sed tristique, odio blandit ornare consectetur, libero sem maximus leo, eu gravida mauris diam sit amet justo. Phasellus at lectus diam. Nam elemen.</Comment.Text>
                            <Comment.Actions>
                                <Button as='div' labelPosition='right'>
                                    <Button color='green'>
                                        <Icon name='thumbs up' />
                                    </Button>
                                    <Label as='a' basic color='green' pointing='left'>
                                        2,048
                                    </Label>
                                </Button>
                                <Button as='div' labelPosition='right'>
                                    <Button color='red'>
                                        <Icon name='thumbs down' />
                                    </Button>
                                    <Label as='a' basic color='red' pointing='left'>
                                        2,048
                                    </Label>
                                </Button>
                                <Report />
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Card.Content>
            </Card>


            <Card color='green' style={{ left: 700, top: -240, width: 400 }}>
                <Card.Content>
                    <Comment >

                        <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                                <span>Today at 5:42PM</span>
                            </Comment.Metadata>
                            <Comment.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam dui, mollis vel placerat at, feugiat id ex. Duis pharetra pharetra velit id fringilla. Sed tristique, odio blandit ornare consectetur, libero sem maximus leo, eu gravida mauris diam sit amet justo. Phasellus at lectus diam. Nam elemen.</Comment.Text>
                            <Comment.Actions>
                            <Button as='div' labelPosition='right'>
                                    <Button color='green'>
                                        <Icon name='thumbs up' />
                                    </Button>
                                    <Label as='a' basic color='green' pointing='left'>
                                        2,048
                                    </Label>
                                </Button>
                                <Button as='div' labelPosition='right'>
                                    <Button color='red'>
                                        <Icon name='thumbs down' />
                                    </Button>
                                    <Label as='a' basic color='red' pointing='left'>
                                        2,048
                                    </Label>
                                </Button>
                                <Report />
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Card.Content>
            </Card>

            <Card color='green' style={{ left: 700, top: -220, width: 400 }}>
                <Card.Content>
                    <Comment>

                        <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                                <span>Today at 5:42PM</span>
                            </Comment.Metadata>
                            <Comment.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam dui, mollis vel placerat at, feugiat id ex. Duis pharetra pharetra velit id fringilla. Sed tristique, odio blandit ornare consectetur, libero sem maximus leo, eu gravida mauris diam sit amet justo. Phasellus at lectus diam. Nam elemen.</Comment.Text>
                            <Comment.Actions>
                            <Button as='div' labelPosition='right'>
                                    <Button color='green'>
                                        <Icon name='thumbs up' />
                                    </Button>
                                    <Label as='a' basic color='green' pointing='left'>
                                        2,048
                                    </Label>
                                </Button>
                                <Button as='div' labelPosition='right'>
                                    <Button color='red'>
                                        <Icon name='thumbs down' />
                                    </Button>
                                    <Label as='a' basic color='red' pointing='left'>
                                        2,048
                                    </Label>
                                </Button>
                                <Report />
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Card.Content>
            </Card>

        </Comment.Group>
        <Footer />

    </div>

    
)

export default CommentExampleGroupSize