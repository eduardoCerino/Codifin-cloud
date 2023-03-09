import { useRouter } from 'next/router';
import { candidates } from '@/data/candidates';
import styles from '@/styles/Stack.module.css'
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import Loading from '@/components/Loading/Loading';



const CandidateStackPage = () => {
  const router = useRouter();
  const { stack } = router.query;
  const filteredCandidates = candidates.filter(candidate => candidate.stack === stack);
  
  return (
    <>
    {
      stack === undefined ? <Loading /> : (
       <>
       <Head>
        <title> {stack} | Codifin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout
        title={stack}
        description="Select the candidate you want to see"
        buttonTxt="Add candidate"
      >
        {filteredCandidates.length === 0 ? (
          <p className={styles.error}>No candidates are available for {stack}</p>
        ) : (
            <div className={styles.candidates}>
              {filteredCandidates.map((candidate) => (
                <Link href={`/candidates/${stack}/${candidate.id}`}>
                  <div className={styles.candidate} key={candidate.id}>
                      <img src={candidate.profile} className={styles.profile_pic}/>
                      <h3 className={styles.candidate_name}>{candidate.name}</h3>
                  </div>
                </Link>

              ))}
            </div>
        )}
       </Layout>
       </>
      )
    }
    
    </>
  );
};

export default CandidateStackPage;