import React from 'react';
import CardBook from '../../components/CardBook';
import Layout from '../../components/Layout';
import Skeleton from '../../components/Skeleton';
import Tooltip from '../../components/Tooltip';
import Waterfall from '../../components/Waterfall';
import FollowButton from './FollowButton';
import UserGrowthCount from './UserGrowthCount';

const UserPage = () => {
    return (
        <Layout>
            <div style={{
                textAlign: 'center'
            }}>
                <Skeleton.Image
                    width={128}
                    style={{
                        borderRadius:'50%'
                    }}
                />
                <div>
                    <h1 style={{ display: 'inline-block' }}>Username</h1>
                    <Tooltip title='加关注'>
                        <FollowButton />
                    </Tooltip>
                    <p style={{
                        marginTop: 0,
                        marginBottom: 32
                    }}>user introduction</p>
                    <UserGrowthCount title='点赞' count={100} />
                    <UserGrowthCount title='收藏' count={120} />
                    <UserGrowthCount title='关注' count={100} endDot={false} />
                </div>
                <Waterfall
                    dataSource={[
                        {
                            title: 'a',
                            image: '//a',
                            user: {
                                username: 'asa',
                            },
                            count: {
                                likes: 1,

                            }
                        },
                        {
                            title: 'a',
                            image: '//a',
                            user: {
                                username: 'asa',
                            },
                            count: {
                                likes: 1,
                                
                            }
                        }
                    ]}
                    renderItem={item => (
                        <CardBook post={item} />
                    )}
                />
            </div>
        </Layout>
    )
}

export default UserPage