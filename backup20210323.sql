--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2 (Debian 13.2-1.pgdg100+1)
-- Dumped by pg_dump version 13.2 (Debian 13.2-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Configs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Configs" (
    id integer NOT NULL,
    name character varying(255),
    status integer,
    setting integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Configs" OWNER TO postgres;

--
-- Name: Configs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Configs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Configs_id_seq" OWNER TO postgres;

--
-- Name: Configs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Configs_id_seq" OWNED BY public."Configs".id;


--
-- Name: Countryside; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Countryside" (
    id integer NOT NULL,
    "userId" integer,
    "houseId" integer DEFAULT 0,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Countryside" OWNER TO postgres;

--
-- Name: Countryside_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Countryside_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Countryside_id_seq" OWNER TO postgres;

--
-- Name: Countryside_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Countryside_id_seq" OWNED BY public."Countryside".id;


--
-- Name: Games; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Games" (
    id integer NOT NULL,
    name character varying(255),
    "gameNum" integer,
    "gameRound" integer,
    video character varying(255),
    json text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "VideoLink" text DEFAULT ''::text
);


ALTER TABLE public."Games" OWNER TO postgres;

--
-- Name: Games_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Games_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Games_id_seq" OWNER TO postgres;

--
-- Name: Games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Games_id_seq" OWNED BY public."Games".id;


--
-- Name: Houses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Houses" (
    id integer NOT NULL,
    en character varying(255),
    name character varying(255),
    "leaderId" integer,
    land integer,
    score integer,
    "scorePersonal" integer,
    "scoreTrophy" integer,
    rank integer,
    color character varying(255),
    "rankMove" integer,
    "leaderMatchFamily" integer,
    "sameDepartment" integer,
    "totalFamilyAbility" integer,
    "totalPartake" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Houses" OWNER TO postgres;

--
-- Name: Houses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Houses_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Houses_id_seq" OWNER TO postgres;

--
-- Name: Houses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Houses_id_seq" OWNED BY public."Houses".id;


--
-- Name: Matches; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Matches" (
    id integer NOT NULL,
    game integer,
    round integer,
    name character varying(255),
    "userId" integer,
    mvp integer,
    shift integer,
    activity integer,
    add integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    success integer,
    minus integer DEFAULT 0,
    "houseIdNow" integer DEFAULT 0
);


ALTER TABLE public."Matches" OWNER TO postgres;

--
-- Name: Matches_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Matches_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Matches_id_seq" OWNER TO postgres;

--
-- Name: Matches_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Matches_id_seq" OWNED BY public."Matches".id;


--
-- Name: Orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Orders" (
    id integer NOT NULL,
    before character varying(255),
    after character varying(255),
    spend integer,
    "userId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Orders" OWNER TO postgres;

--
-- Name: Orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Orders_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Orders_id_seq" OWNER TO postgres;

--
-- Name: Orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Orders_id_seq" OWNED BY public."Orders".id;


--
-- Name: Predictions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Predictions" (
    id integer NOT NULL,
    "userId" integer,
    "houseId" integer,
    round integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    num integer,
    target character varying(255)
);


ALTER TABLE public."Predictions" OWNER TO postgres;

--
-- Name: Predictions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Predictions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Predictions_id_seq" OWNER TO postgres;

--
-- Name: Predictions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Predictions_id_seq" OWNED BY public."Predictions".id;


--
-- Name: Results; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Results" (
    id integer NOT NULL,
    game character varying(255),
    ranking character varying(255),
    json text DEFAULT '{}'::text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Results" OWNER TO postgres;

--
-- Name: Results_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Results_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Results_id_seq" OWNER TO postgres;

--
-- Name: Results_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Results_id_seq" OWNED BY public."Results".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: Trophies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Trophies" (
    id integer NOT NULL,
    name character varying(255),
    add integer,
    "ownerHouseId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Trophies" OWNER TO postgres;

--
-- Name: Trophies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Trophies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Trophies_id_seq" OWNER TO postgres;

--
-- Name: Trophies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Trophies_id_seq" OWNED BY public."Trophies".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    code character varying(255),
    "firstName" character varying(255),
    "lastName" character varying(255),
    name character varying(255),
    nickname character varying(255),
    email character varying(255),
    pwd character varying(255),
    "departmentName" character varying(255),
    "houseId" integer,
    "houseIdTmp" integer,
    title character varying(255),
    rv integer,
    "isLeader" boolean,
    str integer,
    dex integer,
    con integer,
    wis integer,
    "int" integer,
    cha integer,
    "strLv" character varying(255),
    "dexLv" character varying(255),
    "conLv" character varying(255),
    "wisLv" character varying(255),
    "intLv" character varying(255),
    "chaLv" character varying(255),
    status integer,
    "thankTimes" integer,
    gender integer,
    partake integer,
    mvp integer,
    "skillPointJson" character varying(255) DEFAULT '{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}'::character varying NOT NULL,
    json character varying(255) DEFAULT '{}'::character varying NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Voters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Voters" (
    id integer NOT NULL,
    "houseId" integer,
    "userId" integer,
    vote integer,
    "voteTwo" integer,
    "voteThree" integer,
    round integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Voters" OWNER TO postgres;

--
-- Name: Voters_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Voters_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Voters_id_seq" OWNER TO postgres;

--
-- Name: Voters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Voters_id_seq" OWNED BY public."Voters".id;


--
-- Name: Configs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Configs" ALTER COLUMN id SET DEFAULT nextval('public."Configs_id_seq"'::regclass);


--
-- Name: Countryside id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Countryside" ALTER COLUMN id SET DEFAULT nextval('public."Countryside_id_seq"'::regclass);


--
-- Name: Games id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Games" ALTER COLUMN id SET DEFAULT nextval('public."Games_id_seq"'::regclass);


--
-- Name: Houses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Houses" ALTER COLUMN id SET DEFAULT nextval('public."Houses_id_seq"'::regclass);


--
-- Name: Matches id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Matches" ALTER COLUMN id SET DEFAULT nextval('public."Matches_id_seq"'::regclass);


--
-- Name: Orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders" ALTER COLUMN id SET DEFAULT nextval('public."Orders_id_seq"'::regclass);


--
-- Name: Predictions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Predictions" ALTER COLUMN id SET DEFAULT nextval('public."Predictions_id_seq"'::regclass);


--
-- Name: Results id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Results" ALTER COLUMN id SET DEFAULT nextval('public."Results_id_seq"'::regclass);


--
-- Name: Trophies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trophies" ALTER COLUMN id SET DEFAULT nextval('public."Trophies_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: Voters id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Voters" ALTER COLUMN id SET DEFAULT nextval('public."Voters_id_seq"'::regclass);


--
-- Data for Name: Configs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Configs" (id, name, status, setting, "createdAt", "updatedAt") FROM stdin;
3	countryside	0	0	2021-03-08 10:46:37.435+00	2021-03-08 10:46:37.435+00
1	prediction	1	1001	2021-03-08 10:46:37.435+00	2021-03-15 06:14:54.167+00
4	love	1	5	2021-03-08 10:46:37.435+00	2021-03-16 07:38:51.512+00
5	twitch	0	0	2021-03-12 15:01:59.337+00	2021-03-16 07:38:59.88+00
2	vote	1	1	2021-03-08 10:46:37.435+00	2021-03-22 03:46:53.154+00
\.


--
-- Data for Name: Countryside; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Countryside" (id, "userId", "houseId", "createdAt", "updatedAt") FROM stdin;
2	17	0	2021-03-02 04:28:24.466+00	2021-03-02 04:28:24.466+00
18	65	0	2021-03-02 04:28:24.466+00	2021-03-02 04:28:24.466+00
38	10	0	2021-03-02 04:28:24.466+00	2021-03-02 04:28:24.466+00
43	84	4	2021-03-02 04:28:24.466+00	2021-03-05 03:13:26.629+00
10	43	3	2021-03-02 04:28:24.466+00	2021-03-05 04:54:00.37+00
28	99	6	2021-03-02 04:28:24.466+00	2021-03-02 04:35:41.281+00
40	74	8	2021-03-02 04:28:24.466+00	2021-03-02 04:58:04.367+00
13	46	3	2021-03-02 04:28:24.466+00	2021-03-05 04:54:08.83+00
46	87	1	2021-03-02 04:28:24.466+00	2021-03-02 05:49:44.222+00
42	44	1	2021-03-02 04:28:24.466+00	2021-03-02 05:52:10.416+00
21	94	7	2021-03-02 04:28:24.466+00	2021-03-02 05:53:26.53+00
26	119	3	2021-03-02 04:28:24.466+00	2021-03-05 04:54:17.862+00
39	56	1	2021-03-02 04:28:24.466+00	2021-03-02 06:58:22.947+00
37	61	8	2021-03-02 04:28:24.466+00	2021-03-02 07:18:30.885+00
5	29	7	2021-03-02 04:28:24.466+00	2021-03-02 07:20:49.907+00
29	114	7	2021-03-02 04:28:24.466+00	2021-03-02 07:44:03.75+00
33	64	7	2021-03-02 04:28:24.466+00	2021-03-02 09:34:15.415+00
45	23	4	2021-03-02 04:28:24.466+00	2021-03-02 17:11:30.971+00
41	52	3	2021-03-02 04:28:24.466+00	2021-03-03 00:00:19.03+00
47	41	1	2021-03-02 04:28:24.466+00	2021-03-03 00:03:57.606+00
12	47	1	2021-03-02 04:28:24.466+00	2021-03-03 00:09:03.617+00
3	19	5	2021-03-02 04:28:24.466+00	2021-03-03 00:40:58.725+00
16	33	5	2021-03-02 04:28:24.466+00	2021-03-03 05:58:18.566+00
1	14	8	2021-03-02 04:28:24.466+00	2021-03-03 06:19:44.58+00
7	7	5	2021-03-02 04:28:24.466+00	2021-03-03 07:39:08.755+00
6	26	5	2021-03-02 04:28:24.466+00	2021-03-03 07:42:37.302+00
8	2	8	2021-03-02 04:28:24.466+00	2021-03-03 07:57:04.84+00
20	88	6	2021-03-02 04:28:24.466+00	2021-03-03 08:36:33.033+00
35	13	4	2021-03-02 04:28:24.466+00	2021-03-03 08:43:03.055+00
11	62	8	2021-03-02 04:28:24.466+00	2021-03-03 14:49:18.617+00
14	54	7	2021-03-02 04:28:24.466+00	2021-03-03 15:32:39.969+00
17	45	5	2021-03-02 04:28:24.466+00	2021-03-03 17:02:14.485+00
4	8	8	2021-03-02 04:28:24.466+00	2021-03-04 00:43:50.492+00
49	107	2	2021-03-02 04:28:24.466+00	2021-03-04 01:16:02.646+00
15	37	0	2021-03-02 04:28:24.466+00	2021-03-04 01:30:29.196+00
27	108	7	2021-03-02 04:28:24.466+00	2021-03-04 01:55:32.941+00
34	1	7	2021-03-02 04:28:24.466+00	2021-03-04 02:45:55.569+00
24	67	2	2021-03-02 04:28:24.466+00	2021-03-04 03:03:20.034+00
30	110	4	2021-03-02 04:28:24.466+00	2021-03-04 03:16:48.428+00
25	82	4	2021-03-02 04:28:24.466+00	2021-03-04 06:11:10.976+00
19	86	4	2021-03-02 04:28:24.466+00	2021-03-04 06:11:11.578+00
22	70	0	2021-03-02 04:28:24.466+00	2021-03-04 06:13:30.937+00
36	21	8	2021-03-02 04:28:24.466+00	2021-03-04 06:13:58.389+00
44	96	5	2021-03-02 04:28:24.466+00	2021-03-04 06:16:20.659+00
48	50	3	2021-03-02 04:28:24.466+00	2021-03-04 07:04:11.585+00
32	68	2	2021-03-02 04:28:24.466+00	2021-03-04 14:35:08.783+00
31	63	2	2021-03-02 04:28:24.466+00	2021-03-04 14:41:20.677+00
9	55	2	2021-03-02 04:28:24.466+00	2021-03-04 15:47:51.639+00
23	90	2	2021-03-02 04:28:24.466+00	2021-03-05 02:05:05.286+00
\.


--
-- Data for Name: Games; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Games" (id, name, "gameNum", "gameRound", video, json, "createdAt", "updatedAt", "VideoLink") FROM stdin;
2	睿訊之國的闖關者(梅花)	2	1	\N	\N	2021-03-15 15:19:44.957+00	2021-03-15 15:19:44.957+00	
3	睿訊之國的闖關者(黑桃)	3	1	\N	\N	2021-03-16 01:31:08.652+00	2021-03-16 01:31:08.652+00	
4	睿訊之國的闖關者(紅心)	4	1	\N	\N	2021-03-16 04:59:56.18+00	2021-03-16 04:59:56.18+00	
1	睿訊之國的闖關者(黑桃)	1	1	\N	{"love":50}	2021-03-10 12:25:40.68+00	2021-03-16 05:00:47.279+00	
5	睿訊之國的闖關者(方塊)	5	1	\N	{"love":0}	2021-03-17 04:08:18.748+00	2021-03-17 05:15:59.62+00	
6	睿訊之國的闖關者(紅心)	6	1	\N	\N	2021-03-17 07:53:38.683+00	2021-03-17 07:53:38.683+00	
7	睿訊之國的闖關者(方塊)	7	1	\N	\N	2021-03-18 01:10:56.148+00	2021-03-18 01:10:56.148+00	
8	睿訊之國的闖關者(梅花)	8	1	\N	\N	2021-03-18 05:09:33.677+00	2021-03-18 05:09:33.677+00	
9	睿訊之國的闖關者(紅心)	9	1	\N	\N	2021-03-19 05:21:03.959+00	2021-03-19 05:21:03.959+00	
10	睿訊之國的闖關者(方塊)	10	1	\N	\N	2021-03-19 08:11:09.839+00	2021-03-19 08:11:09.839+00	
11	睿訊之國的闖關者(紅心)	11	1	\N	\N	2021-03-22 05:15:01.753+00	2021-03-22 05:15:01.753+00	
12	睿訊之國的闖關者(梅花)	12	1	\N	\N	2021-03-22 09:21:15.141+00	2021-03-22 09:21:15.141+00	
13	睿訊之國的闖關者(黑桃)	13	1	\N	\N	2021-03-23 02:06:17.701+00	2021-03-23 02:06:17.701+00	
14	睿訊之國的闖關者(方塊)	14	1	\N	\N	2021-03-23 05:21:27.501+00	2021-03-23 05:21:27.501+00	
\.


--
-- Data for Name: Houses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Houses" (id, en, name, "leaderId", land, score, "scorePersonal", "scoreTrophy", rank, color, "rankMove", "leaderMatchFamily", "sameDepartment", "totalFamilyAbility", "totalPartake", "createdAt", "updatedAt") FROM stdin;
8	martell	馬泰爾	118	0	-19	0	0	0	#ffa707	0	0	0	0	0	2021-02-20 12:20:58.747+00	2021-02-26 09:00:26.712+00
7	targaryen	坦格利安	106	0	-34	0	0	0	#730000	0	0	0	0	0	2021-02-20 12:20:58.747+00	2021-02-26 09:00:26.732+00
6	baratheon	拜拉席恩	80	0	-31	0	0	0	#e4df33	0	0	0	0	0	2021-02-20 12:20:58.747+00	2021-02-26 09:00:26.734+00
5	tyrell	提利爾	115	0	-17	0	0	0	#00ff1f	0	0	0	0	0	2021-02-20 12:20:58.747+00	2021-02-26 09:00:26.737+00
3	tully	徒利	113	0	-5	0	0	0	#e400ff	0	0	0	0	0	2021-02-20 12:20:58.747+00	2021-02-26 09:00:26.741+00
4	lannister	蘭尼斯特	91	0	-30	0	0	0	#ff0000	0	0	0	0	0	2021-02-20 12:20:58.747+00	2021-02-26 09:00:26.738+00
2	eyrie	艾林	109	0	-35	0	0	0	#0400ff	0	0	0	0	0	2021-02-20 12:20:58.747+00	2021-02-26 09:00:26.797+00
1	stark	史塔克	100	0	-34	0	0	0	#a7a7a7	0	0	0	0	0	2021-02-20 12:20:58.747+00	2021-02-26 09:00:26.836+00
\.


--
-- Data for Name: Matches; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Matches" (id, game, round, name, "userId", mvp, shift, activity, add, "createdAt", "updatedAt", success, minus, "houseIdNow") FROM stdin;
9	1	1	睿訊之國的闖關者(黑桃)	102	0	0	0	0	2021-03-15 15:16:46.182+00	2021-03-17 04:04:54.37+00	0	1	7
39	4	1	睿訊之國的闖關者(紅心)	98	0	0	2	3	2021-03-16 04:59:56.184+00	2021-03-17 04:05:00.978+00	0	0	6
38	4	1	睿訊之國的闖關者(紅心)	96	0	0	2	0	2021-03-16 04:59:56.184+00	2021-03-17 04:05:06.682+00	1	0	5
22	3	1	睿訊之國的闖關者(黑桃)	93	0	0	4	3	2021-03-16 01:31:08.655+00	2021-03-17 04:05:12.698+00	1	0	1
24	3	1	睿訊之國的闖關者(黑桃)	89	0	0	2	3	2021-03-16 01:31:08.655+00	2021-03-17 04:05:18.778+00	0	0	2
15	2	1	睿訊之國的闖關者(梅花)	88	0	0	4	0	2021-03-15 15:19:44.961+00	2021-03-17 04:05:22.354+00	1	0	6
3	1	1	睿訊之國的闖關者(黑桃)	86	0	0	3	0	2021-03-15 04:56:49.439+00	2021-03-17 04:05:33.713+00	1	0	4
41	4	1	睿訊之國的闖關者(紅心)	20	0	0	1	3	2021-03-16 04:59:56.184+00	2021-03-17 04:07:18.744+00	1	0	3
20	3	1	睿訊之國的闖關者(黑桃)	18	0	0	4	3	2021-03-16 01:31:08.655+00	2021-03-17 04:08:00.983+00	0	0	6
1	1	1	睿訊之國的闖關者(黑桃)	85	0	0	4	3	2021-03-15 04:56:49.439+00	2021-03-17 04:05:34.498+00	1	0	8
25	3	1	睿訊之國的闖關者(黑桃)	85	0	0	2	3	2021-03-16 01:31:08.655+00	2021-03-17 04:05:35.273+00	0	0	8
12	2	1	睿訊之國的闖關者(梅花)	82	0	0	4	0	2021-03-15 15:19:44.961+00	2021-03-17 04:05:46.832+00	1	0	4
34	4	1	睿訊之國的闖關者(紅心)	14	0	0	1	0	2021-03-16 04:59:56.184+00	2021-03-17 04:08:05.284+00	0	0	8
14	2	1	睿訊之國的闖關者(梅花)	7	0	0	4	0	2021-03-15 15:19:44.961+00	2021-03-17 04:08:14.508+00	1	0	5
42	5	1	睿訊之國的闖關者(方塊)	2	0	0	2	0	2021-03-17 05:15:59.621+00	2021-03-17 05:15:59.621+00	1	0	8
43	5	1	睿訊之國的闖關者(方塊)	67	0	0	2	0	2021-03-17 05:15:59.621+00	2021-03-17 05:15:59.621+00	0	0	2
44	5	1	睿訊之國的闖關者(方塊)	5	0	0	2	3	2021-03-17 05:15:59.621+00	2021-03-17 05:15:59.621+00	1	0	4
5	1	1	睿訊之國的闖關者(黑桃)	115	0	0	2	3	2021-03-15 04:56:49.439+00	2021-03-17 04:04:19.848+00	1	0	5
36	4	1	睿訊之國的闖關者(紅心)	110	0	0	2	0	2021-03-16 04:59:56.184+00	2021-03-17 04:04:35.826+00	0	0	4
2	1	1	睿訊之國的闖關者(黑桃)	109	0	0	2	3	2021-03-15 04:56:49.439+00	2021-03-17 04:04:40.583+00	0	0	2
35	4	1	睿訊之國的闖關者(紅心)	109	0	0	1	3	2021-03-16 04:59:56.184+00	2021-03-17 04:04:41.154+00	1	0	2
7	1	1	睿訊之國的闖關者(黑桃)	106	0	0	2	3	2021-03-15 04:56:49.439+00	2021-03-17 04:04:49.977+00	0	0	7
40	4	1	睿訊之國的闖關者(紅心)	81	0	0	4	3	2021-03-16 04:59:56.184+00	2021-03-17 04:05:47.569+00	1	0	7
6	1	1	睿訊之國的闖關者(黑桃)	80	0	0	2	3	2021-03-15 04:56:49.439+00	2021-03-17 04:05:48.089+00	0	0	6
11	2	1	睿訊之國的闖關者(梅花)	72	0	0	4	3	2021-03-15 15:19:44.961+00	2021-03-17 04:05:59.146+00	1	0	2
10	2	1	睿訊之國的闖關者(梅花)	71	0	0	4	3	2021-03-15 15:19:44.961+00	2021-03-17 04:05:59.744+00	1	0	8
19	3	1	睿訊之國的闖關者(黑桃)	64	0	0	2	0	2021-03-16 01:31:08.655+00	2021-03-17 04:06:08.049+00	1	0	7
17	2	1	睿訊之國的闖關者(梅花)	50	0	0	4	0	2021-03-15 15:19:44.961+00	2021-03-17 04:06:14.642+00	1	0	3
21	3	1	睿訊之國的闖關者(黑桃)	49	0	0	3	3	2021-03-16 01:31:08.655+00	2021-03-17 04:06:20.033+00	1	0	5
4	1	1	睿訊之國的闖關者(黑桃)	47	0	0	2	0	2021-03-15 04:56:49.439+00	2021-03-17 04:06:23.167+00	0	0	1
13	2	1	睿訊之國的闖關者(梅花)	44	0	0	4	0	2021-03-15 15:19:44.961+00	2021-03-17 04:06:27.488+00	1	0	1
18	3	1	睿訊之國的闖關者(黑桃)	42	0	0	2	3	2021-03-16 01:31:08.655+00	2021-03-17 04:06:32.63+00	1	0	3
37	4	1	睿訊之國的闖關者(紅心)	41	0	0	2	0	2021-03-16 04:59:56.184+00	2021-03-17 04:06:37.424+00	1	0	1
16	2	1	睿訊之國的闖關者(梅花)	29	0	0	4	0	2021-03-15 15:19:44.961+00	2021-03-17 04:06:58.225+00	1	0	7
23	3	1	睿訊之國的闖關者(黑桃)	23	0	0	2	0	2021-03-16 01:31:08.655+00	2021-03-17 04:07:05.495+00	0	0	4
8	1	1	睿訊之國的闖關者(黑桃)	20	0	0	1	3	2021-03-15 04:56:49.439+00	2021-03-17 04:07:18.215+00	1	0	3
45	5	1	睿訊之國的闖關者(方塊)	87	0	0	1	0	2021-03-17 05:15:59.621+00	2021-03-17 05:15:59.621+00	0	0	1
46	5	1	睿訊之國的闖關者(方塊)	101	0	0	2	3	2021-03-17 05:15:59.621+00	2021-03-17 05:15:59.621+00	1	0	5
47	5	1	睿訊之國的闖關者(方塊)	99	0	0	3	0	2021-03-17 05:15:59.621+00	2021-03-17 05:15:59.621+00	1	0	6
48	5	1	睿訊之國的闖關者(方塊)	12	0	0	4	3	2021-03-17 05:15:59.621+00	2021-03-17 05:15:59.621+00	1	0	7
49	5	1	睿訊之國的闖關者(方塊)	52	0	0	1	0	2021-03-17 05:15:59.621+00	2021-03-17 05:15:59.621+00	0	0	3
50	6	1	睿訊之國的闖關者(紅心)	53	0	0	1	3	2021-03-17 07:53:38.687+00	2021-03-17 07:53:38.687+00	0	0	8
51	6	1	睿訊之國的闖關者(紅心)	72	0	0	1	3	2021-03-17 07:53:38.687+00	2021-03-17 07:53:38.687+00	0	0	2
52	6	1	睿訊之國的闖關者(紅心)	40	0	0	1	3	2021-03-17 07:53:38.687+00	2021-03-17 07:53:38.687+00	0	0	4
53	6	1	睿訊之國的闖關者(紅心)	56	0	0	2	0	2021-03-17 07:53:38.687+00	2021-03-17 07:53:38.687+00	0	0	1
54	6	1	睿訊之國的闖關者(紅心)	34	0	0	4	3	2021-03-17 07:53:38.687+00	2021-03-17 07:53:38.687+00	1	0	5
55	6	1	睿訊之國的闖關者(紅心)	92	0	0	1	3	2021-03-17 07:53:38.687+00	2021-03-17 07:53:38.687+00	0	0	6
56	6	1	睿訊之國的闖關者(紅心)	94	0	0	2	0	2021-03-17 07:53:38.687+00	2021-03-17 07:53:38.687+00	0	0	7
57	6	1	睿訊之國的闖關者(紅心)	43	0	0	1	0	2021-03-17 07:53:38.687+00	2021-03-17 07:53:38.687+00	0	0	3
58	7	1	睿訊之國的闖關者(方塊)	8	0	0	2	0	2021-03-18 01:10:56.152+00	2021-03-18 01:10:56.152+00	0	0	8
59	7	1	睿訊之國的闖關者(方塊)	55	0	0	2	0	2021-03-18 01:10:56.152+00	2021-03-18 01:10:56.152+00	1	0	2
60	7	1	睿訊之國的闖關者(方塊)	97	0	0	2	3	2021-03-18 01:10:56.152+00	2021-03-18 01:10:56.152+00	1	0	4
61	7	1	睿訊之國的闖關者(方塊)	77	0	0	2	3	2021-03-18 01:10:56.152+00	2021-03-18 01:10:56.152+00	1	0	1
62	7	1	睿訊之國的闖關者(方塊)	60	0	0	2	3	2021-03-18 01:10:56.152+00	2021-03-18 01:10:56.152+00	0	0	6
63	7	1	睿訊之國的闖關者(方塊)	19	0	0	2	0	2021-03-18 01:10:56.152+00	2021-03-18 01:10:56.152+00	0	0	5
64	7	1	睿訊之國的闖關者(方塊)	54	0	0	2	0	2021-03-18 01:10:56.152+00	2021-03-18 01:10:56.152+00	0	0	7
65	7	1	睿訊之國的闖關者(方塊)	46	0	0	2	0	2021-03-18 01:10:56.152+00	2021-03-18 01:10:56.152+00	0	0	3
66	8	1	睿訊之國的闖關者(梅花)	21	0	0	3	0	2021-03-18 05:09:33.681+00	2021-03-18 05:09:33.681+00	1	0	8
67	8	1	睿訊之國的闖關者(梅花)	67	0	0	3	0	2021-03-18 05:09:33.681+00	2021-03-18 05:09:33.681+00	1	0	2
68	8	1	睿訊之國的闖關者(梅花)	86	0	0	3	0	2021-03-18 05:09:33.681+00	2021-03-18 05:09:33.681+00	1	0	4
69	8	1	睿訊之國的闖關者(梅花)	83	0	0	1	3	2021-03-18 05:09:33.681+00	2021-03-18 05:09:33.681+00	0	0	1
70	8	1	睿訊之國的闖關者(梅花)	101	0	0	3	3	2021-03-18 05:09:33.681+00	2021-03-18 05:09:33.681+00	1	0	5
71	8	1	睿訊之國的闖關者(梅花)	58	0	0	3	3	2021-03-18 05:09:33.681+00	2021-03-18 05:09:33.681+00	1	0	6
72	8	1	睿訊之國的闖關者(梅花)	102	0	0	3	3	2021-03-18 05:09:33.681+00	2021-03-18 05:09:33.681+00	1	0	7
73	8	1	睿訊之國的闖關者(梅花)	105	0	0	3	3	2021-03-18 05:09:33.681+00	2021-03-18 05:09:33.681+00	1	0	3
74	9	1	睿訊之國的闖關者(紅心)	74	0	0	2	0	2021-03-19 05:21:03.969+00	2021-03-19 05:21:03.969+00	1	0	8
75	9	1	睿訊之國的闖關者(紅心)	89	0	0	2	3	2021-03-19 05:21:03.969+00	2021-03-19 05:21:03.969+00	0	0	2
76	9	1	睿訊之國的闖關者(紅心)	117	0	0	2	3	2021-03-19 05:21:03.969+00	2021-03-19 05:21:03.969+00	1	0	4
77	9	1	睿訊之國的闖關者(紅心)	87	0	0	3	0	2021-03-19 05:21:03.969+00	2021-03-19 05:21:03.969+00	1	0	1
78	9	1	睿訊之國的闖關者(紅心)	33	0	0	2	0	2021-03-19 05:21:03.969+00	2021-03-19 05:21:03.969+00	1	0	5
80	9	1	睿訊之國的闖關者(紅心)	108	0	0	2	0	2021-03-19 05:21:03.969+00	2021-03-19 05:21:03.969+00	1	0	7
81	9	1	睿訊之國的闖關者(紅心)	25	0	0	2	3	2021-03-19 05:21:03.969+00	2021-03-19 05:21:03.969+00	1	0	3
79	9	1	睿訊之國的闖關者(紅心)	103	0	0	2	3	2021-03-19 05:21:03.969+00	2021-03-19 05:21:43.761+00	0	0	6
82	10	1	睿訊之國的闖關者(方塊)	59	0	0	1	3	2021-03-19 08:11:09.843+00	2021-03-19 08:11:09.843+00	0	0	8
83	10	1	睿訊之國的闖關者(方塊)	38	0	0	2	3	2021-03-19 08:11:09.843+00	2021-03-19 08:11:09.843+00	0	0	2
84	10	1	睿訊之國的闖關者(方塊)	13	0	0	2	0	2021-03-19 08:11:09.843+00	2021-03-19 08:11:09.843+00	0	0	4
85	10	1	睿訊之國的闖關者(方塊)	78	0	0	2	3	2021-03-19 08:11:09.843+00	2021-03-19 08:11:09.843+00	0	0	1
86	10	1	睿訊之國的闖關者(方塊)	27	0	0	2	3	2021-03-19 08:11:09.843+00	2021-03-19 08:11:09.843+00	0	0	5
87	10	1	睿訊之國的闖關者(方塊)	95	0	0	2	3	2021-03-19 08:11:09.843+00	2021-03-19 08:11:09.843+00	0	0	6
88	10	1	睿訊之國的闖關者(方塊)	3	0	0	2	3	2021-03-19 08:11:09.843+00	2021-03-19 08:11:09.843+00	0	0	7
89	10	1	睿訊之國的闖關者(方塊)	69	0	0	2	3	2021-03-19 08:11:09.843+00	2021-03-19 08:11:09.843+00	1	0	3
90	11	1	睿訊之國的闖關者(紅心)	118	0	0	2	3	2021-03-22 05:15:01.763+00	2021-03-22 05:15:01.763+00	1	0	8
91	11	1	睿訊之國的闖關者(紅心)	121	0	0	2	3	2021-03-22 05:15:01.763+00	2021-03-22 05:15:01.763+00	0	0	2
92	11	1	睿訊之國的闖關者(紅心)	97	0	0	2	3	2021-03-22 05:15:01.763+00	2021-03-22 05:15:01.763+00	1	0	4
93	11	1	睿訊之國的闖關者(紅心)	47	0	0	3	0	2021-03-22 05:15:01.763+00	2021-03-22 05:15:01.763+00	1	0	1
94	11	1	睿訊之國的闖關者(紅心)	19	0	0	3	0	2021-03-22 05:15:01.763+00	2021-03-22 05:15:01.763+00	1	0	5
95	11	1	睿訊之國的闖關者(紅心)	80	0	0	3	3	2021-03-22 05:15:01.763+00	2021-03-22 05:15:01.763+00	1	0	6
96	11	1	睿訊之國的闖關者(紅心)	4	0	0	2	3	2021-03-22 05:15:01.763+00	2021-03-22 05:15:01.763+00	1	0	7
97	11	1	睿訊之國的闖關者(紅心)	119	0	0	2	0	2021-03-22 05:15:01.763+00	2021-03-22 05:15:01.763+00	1	0	3
98	12	1	睿訊之國的闖關者(梅花)	79	0	0	2	3	2021-03-22 09:21:15.145+00	2021-03-22 09:21:15.145+00	0	0	8
99	12	1	睿訊之國的闖關者(梅花)	9	0	0	2	3	2021-03-22 09:21:15.145+00	2021-03-22 09:21:15.145+00	0	0	2
100	12	1	睿訊之國的闖關者(梅花)	13	0	0	2	0	2021-03-22 09:21:15.145+00	2021-03-22 09:21:15.145+00	0	0	4
101	12	1	睿訊之國的闖關者(梅花)	30	0	0	2	3	2021-03-22 09:21:15.145+00	2021-03-22 09:21:15.145+00	0	0	1
102	12	1	睿訊之國的闖關者(梅花)	104	0	0	2	3	2021-03-22 09:21:15.145+00	2021-03-22 09:21:15.145+00	0	0	5
103	12	1	睿訊之國的闖關者(梅花)	95	0	0	2	3	2021-03-22 09:21:15.145+00	2021-03-22 09:21:15.145+00	0	0	6
104	12	1	睿訊之國的闖關者(梅花)	76	0	0	2	3	2021-03-22 09:21:15.145+00	2021-03-22 09:21:15.145+00	0	0	7
105	12	1	睿訊之國的闖關者(梅花)	11	0	0	2	3	2021-03-22 09:21:15.145+00	2021-03-22 09:21:15.145+00	0	0	3
106	13	1	睿訊之國的闖關者(黑桃)	62	0	0	4	0	2021-03-23 02:06:17.705+00	2021-03-23 02:06:17.705+00	0	0	8
107	13	1	睿訊之國的闖關者(黑桃)	107	0	0	3	0	2021-03-23 02:06:17.705+00	2021-03-23 02:06:17.705+00	1	0	2
108	13	1	睿訊之國的闖關者(黑桃)	36	0	0	2	3	2021-03-23 02:06:17.705+00	2021-03-23 02:06:17.705+00	0	0	4
109	13	1	睿訊之國的闖關者(黑桃)	111	0	0	2	3	2021-03-23 02:06:17.705+00	2021-03-23 02:06:17.705+00	0	0	1
110	13	1	睿訊之國的闖關者(黑桃)	45	0	0	4	0	2021-03-23 02:06:17.705+00	2021-03-23 02:06:17.705+00	1	0	5
111	13	1	睿訊之國的闖關者(黑桃)	18	0	0	2	3	2021-03-23 02:06:17.705+00	2021-03-23 02:06:17.705+00	0	0	6
112	13	1	睿訊之國的闖關者(黑桃)	116	0	0	2	3	2021-03-23 02:06:17.705+00	2021-03-23 02:06:17.705+00	1	0	7
113	13	1	睿訊之國的闖關者(黑桃)	25	0	0	3	3	2021-03-23 02:06:17.705+00	2021-03-23 02:06:17.705+00	1	0	3
114	14	1	睿訊之國的闖關者(方塊)	118	0	0	2	3	2021-03-23 05:21:27.505+00	2021-03-23 05:21:27.505+00	1	0	8
115	14	1	睿訊之國的闖關者(方塊)	15	0	0	1	3	2021-03-23 05:21:27.505+00	2021-03-23 05:21:27.505+00	0	0	2
116	14	1	睿訊之國的闖關者(方塊)	36	0	0	2	3	2021-03-23 05:21:27.505+00	2021-03-23 05:21:27.505+00	1	0	4
117	14	1	睿訊之國的闖關者(方塊)	93	0	0	1	3	2021-03-23 05:21:27.505+00	2021-03-23 05:21:27.505+00	0	0	1
118	14	1	睿訊之國的闖關者(方塊)	39	0	0	1	3	2021-03-23 05:21:27.505+00	2021-03-23 05:21:27.505+00	0	0	5
119	14	1	睿訊之國的闖關者(方塊)	58	0	0	1	3	2021-03-23 05:21:27.505+00	2021-03-23 05:21:27.505+00	0	0	6
120	14	1	睿訊之國的闖關者(方塊)	1	0	0	1	0	2021-03-23 05:21:27.505+00	2021-03-23 05:21:27.505+00	0	0	7
121	14	1	睿訊之國的闖關者(方塊)	119	0	0	4	0	2021-03-23 05:21:27.505+00	2021-03-23 05:21:27.505+00	1	0	3
\.


--
-- Data for Name: Orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Orders" (id, before, after, spend, "userId", "createdAt", "updatedAt") FROM stdin;
1	9527	靈刀武西郎	3	36	2021-03-02 06:33:04.918+00	2021-03-02 06:33:04.918+00
5	統神端火鍋	還敢下來阿冰鳥	3	38	2021-03-03 07:55:07.012+00	2021-03-03 07:55:07.012+00
7	洲子街友	污辱米糕	3	54	2021-03-03 15:31:58.878+00	2021-03-03 15:31:58.878+00
8	財神總統當選BBG市長	愛你	3	84	2021-03-05 02:25:51.144+00	2021-03-05 02:25:51.144+00
9	PLTR🚀🚀🚀	🚀握不住的他🚀	3	85	2021-03-05 05:24:34.084+00	2021-03-05 05:24:34.084+00
3	善良是我的弱點	包莖找謝智宇	0	114	2021-03-03 06:17:11.86+00	2021-03-09 02:05:15.358+00
4	包莖找謝智宇	包莖早洩治癒	0	114	2021-03-03 07:16:09.044+00	2021-03-09 02:05:20.832+00
6	包莖早洩治癒	侯統癢	0	114	2021-03-03 08:26:44.794+00	2021-03-09 02:05:29.534+00
10	熱血旋轉花花愛心破壞者	石少甫	3	21	2021-03-17 07:32:50.322+00	2021-03-17 07:32:50.322+00
\.


--
-- Data for Name: Predictions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Predictions" (id, "userId", "houseId", round, "createdAt", "updatedAt", num, target) FROM stdin;
33	16	3	1	2021-03-15 03:34:34.109+00	2021-03-15 03:34:34.109+00	1	\N
34	25	3	1	2021-03-15 03:36:01.821+00	2021-03-15 03:36:01.821+00	1	\N
35	44	1	1	2021-03-15 03:39:11.411+00	2021-03-15 03:39:11.411+00	1	\N
36	36	4	1	2021-03-15 03:40:01.287+00	2021-03-15 03:40:01.287+00	1	\N
37	10	7	1	2021-03-15 03:41:58.599+00	2021-03-15 03:41:58.599+00	1	\N
38	15	2	1	2021-03-15 03:42:56.771+00	2021-03-15 03:42:56.771+00	1	\N
39	84	4	1	2021-03-15 03:46:47.321+00	2021-03-15 03:46:47.321+00	1	\N
40	37	4	1	2021-03-15 03:47:36.185+00	2021-03-15 03:47:36.185+00	1	\N
41	58	6	1	2021-03-15 03:48:12.632+00	2021-03-15 03:48:12.632+00	1	\N
42	5	4	1	2021-03-15 03:49:05.107+00	2021-03-15 03:49:05.107+00	1	\N
43	113	3	1	2021-03-15 03:50:15.152+00	2021-03-15 03:50:15.152+00	1	\N
44	105	8	1	2021-03-15 03:50:28.427+00	2021-03-15 03:50:28.427+00	1	\N
45	101	4	1	2021-03-15 03:53:11.148+00	2021-03-15 03:53:11.148+00	1	\N
46	103	6	1	2021-03-15 03:53:31.504+00	2021-03-15 03:53:31.504+00	1	\N
47	80	6	1	2021-03-15 04:00:07.472+00	2021-03-15 04:00:07.472+00	1	\N
48	86	4	1	2021-03-15 04:26:49.001+00	2021-03-15 04:26:49.001+00	1	\N
49	91	4	1	2021-03-15 04:33:51.739+00	2021-03-15 04:33:51.739+00	1	\N
50	33	5	1	2021-03-15 04:53:07.843+00	2021-03-15 04:53:07.843+00	1	\N
51	85	8	1	2021-03-15 05:50:05.505+00	2021-03-15 05:50:05.505+00	1	\N
52	82	8	1	2021-03-15 06:13:15.131+00	2021-03-15 06:13:15.131+00	1	\N
53	114	8	1	2021-03-15 06:15:18.441+00	2021-03-15 06:15:18.441+00	1	\N
54	72	2	1	2021-03-15 06:37:14.556+00	2021-03-15 06:37:14.556+00	1	\N
55	1	7	1	2021-03-15 06:43:06.905+00	2021-03-15 06:43:06.905+00	1	\N
56	78	1	1	2021-03-15 06:53:43.995+00	2021-03-15 06:53:43.995+00	1	\N
57	96	5	1	2021-03-15 07:17:42.187+00	2021-03-15 07:17:42.187+00	1	\N
58	7	5	1	2021-03-15 07:18:52.327+00	2021-03-15 07:18:52.327+00	1	\N
59	61	8	1	2021-03-15 07:24:43.704+00	2021-03-15 07:24:43.704+00	1	\N
60	30	3	1	2021-03-15 07:28:32.644+00	2021-03-15 07:28:32.644+00	1	\N
61	13	8	1	2021-03-15 07:39:31.44+00	2021-03-15 07:39:31.44+00	1	\N
62	71	8	1	2021-03-15 07:41:30.733+00	2021-03-15 07:41:30.733+00	1	\N
63	59	8	1	2021-03-15 07:53:54.978+00	2021-03-15 07:53:54.978+00	1	\N
64	27	5	1	2021-03-15 07:56:08.886+00	2021-03-15 07:56:08.886+00	1	\N
65	79	8	1	2021-03-15 08:08:31.687+00	2021-03-15 08:08:31.687+00	1	\N
66	109	2	1	2021-03-15 08:17:57.242+00	2021-03-15 08:17:57.242+00	1	\N
67	106	7	1	2021-03-15 09:09:22.527+00	2021-03-15 09:09:22.527+00	1	\N
68	118	8	1	2021-03-15 09:09:24.42+00	2021-03-15 09:09:24.42+00	1	\N
69	42	3	1	2021-03-15 16:42:17.011+00	2021-03-15 16:42:17.011+00	1	\N
70	51	8	1	2021-03-15 18:11:01.006+00	2021-03-15 18:11:01.006+00	1	\N
71	45	5	1	2021-03-15 22:31:24.645+00	2021-03-15 22:31:24.645+00	1	\N
72	99	3	1	2021-03-16 00:18:24.498+00	2021-03-16 00:18:24.498+00	1	\N
73	98	6	1	2021-03-16 00:18:54.768+00	2021-03-16 00:18:54.768+00	1	\N
74	52	3	1	2021-03-16 00:37:54.556+00	2021-03-16 00:37:54.556+00	1	\N
75	8	8	1	2021-03-16 00:42:11.148+00	2021-03-16 00:42:11.148+00	1	\N
76	39	5	1	2021-03-16 00:51:16.396+00	2021-03-16 00:51:16.396+00	1	\N
77	115	5	1	2021-03-16 01:19:07.968+00	2021-03-16 01:19:07.968+00	1	\N
78	17	1	1	2021-03-16 01:32:39.933+00	2021-03-16 01:32:39.933+00	1	\N
79	41	1	1	2021-03-16 01:43:00.593+00	2021-03-16 01:43:00.593+00	1	\N
80	117	3	1	2021-03-16 02:34:03.336+00	2021-03-16 02:34:03.336+00	1	\N
81	70	8	1	2021-03-16 03:23:50.281+00	2021-03-16 03:23:50.281+00	1	\N
82	20	3	1	2021-03-16 05:28:30.653+00	2021-03-16 05:28:30.653+00	1	\N
83	121	2	1	2021-03-16 05:43:40.53+00	2021-03-16 05:43:40.53+00	1	\N
84	87	1	1	2021-03-16 05:46:43.544+00	2021-03-16 05:46:43.544+00	1	\N
85	110	4	1	2021-03-16 06:46:09.379+00	2021-03-16 06:46:09.379+00	1	\N
86	94	7	1	2021-03-16 07:05:33.796+00	2021-03-16 07:05:33.796+00	1	\N
87	108	7	1	2021-03-16 10:37:45.788+00	2021-03-16 10:37:45.788+00	1	\N
88	56	1	1	2021-03-16 13:30:46.227+00	2021-03-16 13:30:46.227+00	1	\N
89	38	3	1	2021-03-16 13:48:42.058+00	2021-03-16 13:48:42.058+00	1	\N
90	62	8	1	2021-03-16 15:00:41.232+00	2021-03-16 15:00:41.232+00	1	\N
91	116	7	1	2021-03-16 15:07:25.18+00	2021-03-16 15:07:25.18+00	1	\N
92	18	6	1	2021-03-16 15:13:34.206+00	2021-03-16 15:13:34.206+00	1	\N
93	54	7	1	2021-03-16 15:52:35.098+00	2021-03-16 15:52:35.098+00	1	\N
94	81	7	1	2021-03-17 00:38:11.391+00	2021-03-17 00:38:11.391+00	1	\N
95	93	1	1	2021-03-17 01:11:14.47+00	2021-03-17 01:11:14.47+00	1	\N
96	67	8	1	2021-03-17 02:30:53.837+00	2021-03-17 02:30:53.837+00	1	\N
97	97	5	1	2021-03-17 06:00:11.756+00	2021-03-17 06:00:11.756+00	1	\N
98	4	7	1	2021-03-17 06:21:32.497+00	2021-03-17 06:21:32.497+00	1	\N
99	102	7	1	2021-03-17 06:22:27.597+00	2021-03-17 06:22:27.597+00	1	\N
100	11	3	1	2021-03-17 07:11:21.192+00	2021-03-17 07:11:21.192+00	1	\N
101	50	3	1	2021-03-17 07:11:24.114+00	2021-03-17 07:11:24.114+00	1	\N
102	9	2	1	2021-03-17 07:40:18.476+00	2021-03-17 07:40:18.476+00	1	\N
103	73	3	1	2021-03-17 07:40:35.711+00	2021-03-17 07:40:35.711+00	1	\N
104	104	5	1	2021-03-17 12:11:00.936+00	2021-03-17 12:11:00.936+00	1	\N
105	46	3	1	2021-03-17 15:26:53.309+00	2021-03-17 15:26:53.309+00	1	\N
106	22	4	1	2021-03-18 01:04:59.131+00	2021-03-18 01:04:59.131+00	1	\N
107	23	4	1	2021-03-18 01:05:35.533+00	2021-03-18 01:05:35.533+00	1	\N
108	90	8	1	2021-03-18 03:09:54.955+00	2021-03-18 03:09:54.955+00	1	\N
109	49	5	1	2021-03-18 03:50:36.814+00	2021-03-18 03:50:36.814+00	1	\N
110	74	8	1	2021-03-18 04:02:35.215+00	2021-03-18 04:02:35.215+00	1	\N
111	21	7	1	2021-03-18 05:17:35.661+00	2021-03-18 05:17:35.661+00	1	\N
112	100	8	1	2021-03-18 06:16:22.432+00	2021-03-18 06:16:22.432+00	1	\N
113	53	3	1	2021-03-18 08:58:04.778+00	2021-03-18 08:58:04.778+00	1	\N
114	40	5	1	2021-03-18 14:55:36.238+00	2021-03-18 14:55:36.238+00	1	\N
115	19	5	1	2021-03-19 05:21:23.65+00	2021-03-19 05:21:23.65+00	1	\N
116	89	2	1	2021-03-19 05:27:25.385+00	2021-03-19 05:27:25.385+00	1	\N
117	48	5	1	2021-03-19 05:29:04.374+00	2021-03-19 05:29:04.374+00	1	\N
118	12	7	1	2021-03-19 07:44:53.443+00	2021-03-19 07:44:53.443+00	1	\N
119	95	6	1	2021-03-19 10:47:56.173+00	2021-03-19 10:47:56.173+00	1	\N
120	111	1	1	2021-03-19 15:51:11.54+00	2021-03-19 15:51:11.54+00	1	\N
121	68	5	1	2021-03-20 08:03:40.527+00	2021-03-20 08:03:40.527+00	1	\N
122	47	8	1	2021-03-21 07:53:55.681+00	2021-03-21 07:53:55.681+00	1	\N
123	55	3	1	2021-03-22 23:15:06.705+00	2021-03-22 23:15:06.705+00	1	\N
124	14	8	1	2021-03-23 05:59:48.691+00	2021-03-23 05:59:48.691+00	1	\N
125	119	3	1	2021-03-23 06:41:00.319+00	2021-03-23 06:41:00.319+00	1	\N
126	43	3	1	2021-03-23 06:59:22.901+00	2021-03-23 06:59:22.901+00	1	\N
127	83	8	1	2021-03-23 07:16:58.476+00	2021-03-23 07:16:58.476+00	1	\N
128	3	7	1	2021-03-23 09:55:28.016+00	2021-03-23 09:55:28.016+00	1	\N
129	63	3	1	2021-03-23 10:32:43.334+00	2021-03-23 10:32:43.334+00	1	\N
\.


--
-- Data for Name: Results; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Results" (id, game, ranking, json, "createdAt", "updatedAt") FROM stdin;
1	睿訊之國的闖關者	[3,5,7,4,8,1,2,6]	{"round":1,"matchesdata":[{"houseId":3,"add":24,"minus":0,"shift":0,"success":10},{"houseId":5,"add":24,"minus":0,"shift":0,"success":10},{"houseId":7,"add":24,"minus":1,"shift":0,"success":8},{"houseId":4,"add":21,"minus":0,"shift":0,"success":8},{"houseId":8,"add":24,"minus":0,"shift":0,"success":7},{"houseId":1,"add":21,"minus":0,"shift":0,"success":6},{"houseId":2,"add":30,"minus":0,"shift":0,"success":5},{"houseId":6,"add":36,"minus":0,"shift":0,"success":4}]}	2021-03-15 15:11:26.282+00	2021-03-23 05:21:32.355+00
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20210122091710-create-user.js
20210122093324-create-house.js
20210122093824-create-trophy.js
20210122100711-create-match.js
20210125071458-create-game.js
20210125073503-create-result.js
20210225073503-create-countryside.js
20210301141707-create-order.js
20210302124615-create-voter.js
20210305054751-create-prediction.js
20210305055126-create-config.js
20210308083134-alter-match.js
20210310084934-alter-prediction.js
20210315064934-alter-match.js
20210316064934-alter-match.js
20210317064934-alter-game.js
\.


--
-- Data for Name: Trophies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Trophies" (id, name, add, "ownerHouseId", "createdAt", "updatedAt") FROM stdin;
1	獨孤求敗	10	0	2021-02-20 12:20:58.743+00	2021-02-20 12:20:58.743+00
2	工作不養閒人	20	0	2021-02-20 12:20:58.743+00	2021-02-20 12:20:58.743+00
3	團隊不養懶人	30	0	2021-02-20 12:20:58.743+00	2021-02-20 12:20:58.743+00
5	情投意合	50	0	2021-02-20 12:20:58.743+00	2021-02-20 12:20:58.743+00
6	九淺一深	60	0	2021-02-20 12:20:58.743+00	2021-02-20 12:20:58.743+00
8	含辛茹苦	80	0	2021-02-20 12:20:58.743+00	2021-02-20 12:20:58.743+00
9	阿姨我不想努力了	90	0	2021-02-20 12:20:58.743+00	2021-02-20 12:20:58.743+00
10	魚知水恩乃幸福之源	100	0	2021-02-20 12:20:58.743+00	2021-02-20 12:20:58.743+00
4	寸草春暉	40	8	2021-02-20 12:20:58.743+00	2021-02-26 09:40:40.031+00
7	如夢似幻	70	6	2021-02-20 12:20:58.743+00	2021-02-26 09:40:54.551+00
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, code, "firstName", "lastName", name, nickname, email, pwd, "departmentName", "houseId", "houseIdTmp", title, rv, "isLeader", str, dex, con, wis, "int", cha, "strLv", "dexLv", "conLv", "wisLv", "intLv", "chaLv", status, "thankTimes", gender, partake, mvp, "skillPointJson", json, "createdAt", "updatedAt") FROM stdin;
18	R339	Rachel	Lu	盧瑞琳	㊣上班只為吃便當㊣	\N	577719e4750f9c3a06890a410931237f	值班客服三組	6	0	Rachel|R339	3	f	55	86	59	80	1	61	C	A	B	B	-	B	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 09:29:59.935+00
11	R349	Alan	Yang	楊東諺	平民	\N	e10adc3949ba59abbe56e057f20f883e	聊天管理組	3	0	Alan|R349	1	f	1	1	1	1	0	1	D	D	D	D	-	D	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 08:52:27.54+00
25	R322	Stan	Yang	楊昀岳	包子入侵	\N	6661b7871fec67f89ac1c382bbb43d43	值班客服一組	3	0	Stan|R322	2	f	60	83	50	44	0	63	B	A	C	C	-	B	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:52:27.541+00
20	R332	Hank	Wei	魏詠霖	肥宅	\N	86a490431730d070185c534792b96cdd	聊天管理組	3	0	Hank|R332	1	f	1	1	1	1	0	-1	D	D	D	D	-	D	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 08:52:27.544+00
5	R363	Simon	Huang	黃嘉界	Super hero	\N	162c097247a7ce7ebe1f1a7b280adb9d	資料庫管理組	4	0	Simon|R363	5	f	100	100	100	100	0	100	S	S	S	S	-	S	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-02-26 08:53:11.825+00
27	R319	Mike	Chang	張峻翔	霸霸	\N	e10adc3949ba59abbe56e057f20f883e	產品服務處	5	0	Mike|R319	1	f	51	71	51	51	0	51	C	B	C	C	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 08:53:53.007+00
2	R366	Sean	Chou	周爾宣	貨拉拉拉不拉拉不拉多	\N	8eed0ea56e3c36097d84ff2809d665d7	風險管理處	0	8	Sean|R366	5	f	78	87	78	78	0	87	A	A	A	B	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:42:57.58+00
12	R350	Vincent	Tseng	曾靖倫	系統管理員	\N	2c9341ca4cf3d87b9e4eb905d6a3ec45	系統管理組	7	0	Vincent|R350	5	f	9999999	9999999	9999999	9999999	0	9999999	S	S	S	S	-	S	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-02-26 08:55:22.716+00
4	R364	Sron	Huang	黃士榮	給你500	\N	36975cab1a14bbbaa53ece76094b2f75	系統管理組	7	0	Sron|R364	4	f	98	73	88	68	0	70	S	B	A	B	-	B	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-26 08:55:22.715+00
29	R312	Vivian	Yang	楊馥華	薇薇安	\N	e9063d4e3d2ae3ced8e519c574ec1883	值班客服一組	0	7	Vivian|R312	4	f	40	60	50	80	0	60	C	B	C	B	-	B	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-03-05 04:44:18.012+00
6	R359	Leo	Lin	林孟鴻	本機使用者	\N	42fc34f9bb4890de9483a7d637b30a94	系統管理組	8	0	Leo|R359	1	f	6	6	6	6	0	6	D	C	D	C	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 09:07:32.937+00
9	R356	Alvis	Wu	吳建逸	多喝水沒事	\N	e80a66808ee4b1780040a1c4c993562b	值班技術三組	2	0	Alvis|R356	4	f	78	70	62	95	0	66	A	B	B	A	-	B	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-26 09:07:32.941+00
14	R347	Aida	Cheng	鄭羽庭	妳好漂亮	\N	0620bca939a36af9d3e7dae991205092	風險管理處	0	8	Aida|R347	5	f	67	64	59	96	0	99	B	B	B	A	-	S	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:42:57.579+00
17	R341	Helen	Tseng	曾若慈	🥺🥺🥺🥺🥺	\N	d177d311ef57587befa3cc70702f6027	值班技術四組	0	0	Helen|R341	4	f	41	68	71	85	0	69	C	B	A	A	-	B	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-24 07:12:51.734+00
8	R357	Brian	Lin	林楷聖	Bbrr	\N	fcea920f7412b5da7be0cf42b8c93759	值班技術四組	0	8	Brian|R357	5	f	98	88	69	96	0	85	S	A	B	A	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:42:57.584+00
19	R335	Yetta	Wang	王彥穎	超越時空的傳奇	\N	88bb04c2039a2a5683fb621445270d57	產品服務處	0	5	Yetta|R335	7	f	70	60	75	85	0	70	B	B	A	A	-	B	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 04:45:55.867+00
7	R358	Kevin	Yang	楊深有	深有牛奶糖	\N	28a58eb3ad7c09ddd3fd317181eeb95f	值班技術四組	0	5	Kevin|R358	6	f	90	51	89	97	0	98	A	C	A	A	-	A	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 04:45:55.869+00
26	R323	Tommy	Kao	高意修	意修尼	\N	a04821ac3cf7e5b42442f17154a6fd6f	產品服務處	0	5	Tommy|R323	2	f	70	50	60	50	0	50	B	C	B	C	-	C	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-03-05 04:45:55.873+00
24	R327	Ivan	Lin	林育弘		\N		值班技術二組	0	0	Ivan|R327	0	f	0	0	0	0	0	0	-	-	-	-	-	-	0	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0}	2021-02-20 12:20:58.71+00	2021-02-24 02:54:23.117+00
31	R310	Egan	Huang	黃敏哲		\N		聊天管理組	0	0	Egan|R310	0	f	0	0	0	0	0	0	-	-	-	-	-	-	0	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0}	2021-02-20 12:20:58.71+00	2021-02-24 03:33:06.982+00
28	R311	Eric	Fan	范峰瑞		\N		總務行政處	0	0	Eric|R311	0	f	0	0	0	0	0	0	-	-	-	-	-	-	0	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0}	2021-02-20 12:20:58.71+00	2021-02-24 06:10:53.534+00
62	R185	Henry	Hsu	許玉暉	寶可夢大師	\N	f0ae72cea9ba84df23b65a7b64a3c2aa	值班技術一組	0	8	Henry|R185	3	f	78	55	64	72	0	40	B	B	B	B	-	C	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-03-05 04:42:57.583+00
51	R251	James	Liao	廖川賢	安度因烏瑞恩	\N	35b6d84061f04ffd209e0892b014128c	值班技術三組	2	0	James|R251	2	f	69	39	69	69	0	30	B	C	B	B	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:51:32.39+00
47	R269	Linda	Wu	吳婉寧	源辣讚讚	\N	7b8a5adcd998a3a72794081266edef5e	值班客服一組	0	1	Linda|R269	6	f	999	555	777	666	0	888	S	S	S	S	-	S	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:51:03.272+00
42	R281	Mandy	Gu	古淑華	二姐	\N	9796c3879f639c7ad523437f7a2f95de	聊天管理組	3	0	Mandy|R281	1	f	2	2	2	2	0	2	D	D	D	D	-	D	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 08:52:27.539+00
40	R289	Sean	Liao	廖尚緯	肖恩	\N	04199a6c54292269fe586bb0a2deb668	值班技術二組	4	0	Sean|R289	3	f	60	84	48	85	0	48	B	A	C	A	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 08:53:11.824+00
35	R305	Abby	Chang	張若凡	聲林之王	\N	e6c5bf7e0d65ab21d36b3a3e53ea1a29	聊天管理組	3	0	Abby|R305	1	f	-999	-999	-999	-999	1	-999	D	D	D	D	-	D	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 09:29:59.94+00
34	R306	Teresa	Ouyang	歐陽霆	睿訊五條悟	\N	8beb31c30f81eb641a92983bb59d7d55	產品服務處	5	0	Teresa|R306	3	f	64	66	61	65	0	72	B	B	B	B	-	B	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 08:53:53+00
39	R294	Eliza	Chang	張懷文	睿訊伏黑惠	\N	3d9188577cc9bfe9291ac66b5cc872b7	產品服務處	5	0	Eliza|R294	2	f	45	53	61	77	0	68	C	C	B	B	-	B	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:53:53.004+00
49	R264	Amber	Chen	陳玉青	薄荷草莓廢柴	\N	e85fc477b165a19b1d888a3a1c3c688c	值班客服三組	5	0	Amber|R264	2	f	75	35	40	60	0	60	B	C	C	B	-	B	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:53:53.011+00
58	R196	Angus	Ko	柯力元	🖕上班滑起來📱	\N	2fdeba9555ad3549fb9cfe63c2cb9cf1	值班客服三組	6	0	Angus|R196	3	f	75	76	74	76	0	74	B	B	A	B	-	B	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 08:54:37.349+00
59	R198	Arron	Lee	李晏青	阿龍	\N	6c41e9f9b274020062fd8ca6caa3c23d	值班技術一組	8	0	Arron|R198	3	f	69	58	72	82	0	60	B	B	B	A	-	B	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 08:56:09.327+00
33	R307	White	Hsieh	謝智宇	深海大巨鰻♥想不想嘗嘗	\N	3ff6338cf1c74e7b11ae043970f52739	值班技術四組	0	5	White|R307	4	f	1	1	1	1	0	1	D	D	D	D	-	D	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-03-05 04:45:55.875+00
53	R235	Jimmy	Tseng	曾彥志	吉米花	\N	7ec90369f3fde7da625075abe4173265	值班技術一組	8	0	Jimmy|R235	2	f	67	68	70	61	0	42	B	B	B	B	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:56:09.325+00
38	R293	Sam	Hsu	許恩振	還敢下來阿冰鳥	\N	c214431d09a82c5ed16945140124c4a5	值班技術三組	2	0	Sam|R293	0	f	73	41	65	91	0	65	B	C	B	A	-	B	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-03-03 07:55:07.007+00
46	R272	Gene	Lin	林毅翔	天竺鼠阿比	\N	5815c001f5458d475dfc67acf20d4954	產品服務處	0	3	Gene|R272	5	f	86	80	93	83	0	66	A	A	S	A	-	B	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:49:23.229+00
36	R300	Hsiang	Yeh	葉相余	油炸包龍星	\N	eccaba4da99f170ab7196b89655ab84d	值班技術二組	4	0	Hsiang|R300	1	f	75	85	75	50	1	100	B	A	A	C	-	S	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 02:08:51.625+00
54	R230	Upton	Liu	劉祥軒	污辱米糕	\N	da09ee598c094bb98a9a41e4e9959749	值班客服一組	0	7	Upton|R230	3	f	70	65	89	60	0	99	B	B	A	C	-	A	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-03-05 04:44:18.016+00
45	R277	Jason	Tsai	蔡浩緯	瘋狂小傑森	\N	55b9e74b55f76476994ec64c62003921	產品服務處	0	5	Jason|R277	2	f	50	50	50	60	0	50	C	C	C	C	-	C	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-03-05 04:45:55.877+00
43	R279	Chester	Chao	趙御尊	11111	\N	cd2c6f92398e83ed8dc9e5032291d764	產品服務處	0	3	Chester|R279	2	f	1	1	1	1	0	1	D	D	D	D	-	D	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-03-05 04:49:23.226+00
55	R231	Sharon	Lee	李修鳳	八拉崩巴	\N	8ddcff3a80f4189ca1c9d4d902c3c909	值班技術三組	0	2	Sharon|R231	7	f	70	68	62	68	0	95	B	B	B	B	-	A	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 04:50:20.735+00
57	R205	Jack	Fun	方科登	捷克爹地	\N	f0c6120a3d0e1dc0e008754f9895b158	聊天管理組	0	0	Jack|R205	4	t	66	66	66	66	0	66	B	B	B	B	W	B	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-03-15 03:41:08.868+00
37	R297	Bella	Shih	施佩儀	小鳥胃☄☄	\N	90a754ef4ba8b9c2369ced6a1a02c7fb	值班客服二組	0	0	Bella|R297	4	f	40	60	55	55	0	50	C	B	B	C	-	C	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-24 07:12:51.736+00
93	R046	Matt	Lin	林育賢	神聖平板不容侵犯	\N	a4b7100250b652fa0d101d8730b541c9	值班客服二組	1	0	Matt|R046	4	f	98	82	52	59	0	88	S	A	C	C	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-26 08:50:48.697+00
72	R120	Duke	Kuo	郭庭維	誰比我會喝飲料	\N	33a520cce725d77db84d3fb24ae7b6df	值班技術三組	2	0	Duke|R120	3	f	60	50	80	100	1	50	B	C	A	S	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 09:29:26.152+00
77	R104	George	Huang	黃志衡	佛度有緣人	\N	45bd395dc004ec244ca1daa8e1a35c59	值班客服二組	1	0	George|R104	3	f	71	71	75	72	0	45	B	B	A	B	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 08:50:48.7+00
65	R179	Vic	Lee	李家維	矮人族族長	\N	f4f7a909803b7d338211f45e9e735cdb	值班技術四組	0	0	Vic|R179	6	f	99	1	99	1	0	99	S	D	S	D	-	S	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-02 02:35:26.259+00
89	R050	Mavis	Wu	吳美君	我阿姨也癢	\N	5a01f0597ac4bdf35c24846734ee9a76	人力資源處	2	0	Mavis|R050	1	f	50	50	50	50	0	50	C	C	C	C	-	C	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 08:51:32.438+00
73	R116	Bruce	Lee	李孝龍	街友	\N	217653a01fea20c72c7054ca01db9694	值班客服三組	4	0	Bruce|R116	5	f	87	87	87	87	0	87	A	A	A	A	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-02-26 08:53:12.011+00
76	R109	Moore	Lee	李洪彰	李阿莫	\N	27af9278d350d5b8f517256142ded0ba	值班客服一組	7	0	Moore|R109	2	f	87	1	1	87	0	87	A	D	D	A	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:55:22.71+00
81	R075	Lin	Hong	洪廷霖	悲傷滷肉飯	\N	5c2fda7cda5f902286b6a298e5b2b108	值班客服一組	7	0	Lin|R075	2	f	60	60	60	60	0	60	C	B	B	C	-	B	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:55:22.72+00
79	R094	Peter	Wang	王智威	都是1	\N	1c63129ae9db9c60c3e8aa94d3e00495	值班技術一組	8	0	Peter|R094	1	f	1	1	1	1	0	1	D	D	D	D	-	D	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 08:56:09.322+00
66	R164	Donem	Hsieh	謝文中	TRXC🚀🌕	\N	4297f44b13955235245b2497399d7a93	值班技術一組	8	0	Donem|R164	2	f	51	74	75	63	0	50	C	B	A	B	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:56:09.33+00
78	R100	Willie	Yeh	葉庭瑋	此用戶暱稱被屏蔽	\N	709d447ad0a32917f8402ac4397cfc8e	值班客服二組	1	0	Willie|R100	1	f	30	30	7	-7	0	7	C	C	C	D	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 09:07:32.939+00
67	R157	Fred	Lee	李承哲	異世界轉生的中二生活	\N	bed128365216c019988915ed3add75fb	值班技術三組	0	2	Fred|R157	7	f	9999999	9999999	9999999	9999999	0	9999999	S	S	S	S	-	S	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:50:20.732+00
88	R056	Evelyn	Kao	高薇雯	姜太公今天不想釣魚	\N	3aa550a6bb25f9f890d8aa9a11b68bc4	值班客服三組	0	6	Evelyn|R056	6	f	60	50	80	100	0	60	B	C	A	S	-	B	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 04:44:49.327+00
90	R052	Dennis	Lin	林永鋒	忍者龜頭痛	\N	a7d634ceba1808fc575043cf48918bed	系統管理組	0	2	Dennis|R052	5	f	87	81	67	83	0	69	A	A	B	A	-	B	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 04:50:20.738+00
86	R053	Leo	Hsu	徐銘鴻	HSU	\N	070be4d4616bbfd3f9a036b4415719c4	資料庫管理組	0	4	Leo|R053	8	f	99	99	99	99	0	99	S	S	S	S	-	S	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:46:35.343+00
94	R043	Candy	Tsou	鄒宜君	吃肥褲撐破	\N	a8801cce6e5292c55e3a80eec649e929	值班客服一組	0	7	Candy|R043	4	f	70	30	47	99	0	18	B	C	C	S	-	C	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-03-05 04:44:18.008+00
91	R049	Ryan	Sung	宋長洲	睿恩	\N	dd8a61016cfde76f5264bca1e2e56a1f	值班技術二組	4	0	Ryan|R049	4	t	30	50	60	70	0	80	C	C	B	B	-	A	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-24 07:12:51.743+00
82	R069	Vic	Hsu	許嘉維	牛年大吉,牛轉乾坤	\N	9a7acdcf6082a805e5e5257b5319d342	值班技術二組	0	4	Vic|R069	4	f	60	75	45	50	0	3	C	B	C	C	-	D	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-03-05 04:46:35.346+00
70	R128	Yusi	Ting	丁于希	精靈	\N	b07e7cf8f593b3287f4c0b0534e3d8e3	運維中心	0	0	Yusi|R128	6	f	67	72	79	80	0	65	B	B	A	B	-	B	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-24 07:12:51.743+00
75	R111	White	Yuan	袁書豪		\N		值班客服一組	0	0	White|R111	0	f	0	0	0	0	0	0	-	-	-	-	-	-	0	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0}	2021-02-20 12:20:58.71+00	2021-02-25 09:05:50.982+00
102	R026	Johnson	Chao	趙祐晟	阿強	\N	79ab945544e5bc017a2317b6146ed3aa	系統管理組	7	0	Johnson|R026	4	f	93	50	92	48	1	91	A	C	S	C	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-26 09:29:59.941+00
121	R002	Richard	Chang	張裕	Acacia_Power	\N	f923a2ab4f2b5e3b240a640186c4e3d7	資料庫管理處	2	0	Richard|R002	5	f	86	90	90	88	0	92	A	A	S	A	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-02-26 08:51:32.392+00
117	R007	Poki	Lin	林子翔	楊伯麟	\N	26b58a41da329e0cbde0cbf956640a58	值班技術二組	4	0	Poki|R007	2	f	66	55	40	68	0	78	B	C	C	B	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:53:11.82+00
97	R040	Jader	Chen	陳家德	賈德	\N	2ab0090de37eb84868a02f6406b2ef05	值班技術二組	4	0	Jader|R040	2	f	67	53	66	56	0	75	B	C	B	C	-	B	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:53:11.821+00
99	R033	Kevin	Chu	朱書賢	㊣上班只為交朋友㊣	\N	0aa2d99e577cfe4cd926c552b52cb123	值班客服三組	0	6	Kevin|R033	7	f	80	85	80	60	0	60	A	A	A	C	-	B	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 04:44:49.329+00
95	R044	Peilin	Yu	余佩霖	㊣上班來潛水餵魚的㊣	\N	45655f84e836732149d3720fc4b3bf59	值班客服三組	6	0	Peilin|R044	3	f	69	98	42	77	0	40	B	S	C	B	-	C	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 08:54:37.294+00
98	R037	Ruiza	Huang	黃子寧	貓在鋼琴上睡著了	\N	71b3b26aaa319e0cdf6fdb8429c112b0	值班客服三組	6	0	Ruiza|R037	5	f	965	660	485	500	0	600	S	S	S	S	-	S	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-02-26 08:54:37.296+00
116	R010	Zoe	Wang	王姸茹	狼皮羊	\N	e93e54dfac0d1aed6c9ae40232d20285	產品服務處	7	0	Zoe|R010	3	f	49	51	61	98	0	78	C	C	B	S	-	A	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 08:55:22.714+00
118	R008	Turtle	Huang	黃海威	龜龜	\N	a6eb993579bb673c9a94c11afb2b180b	值班技術一組	8	0	Turtle|R008	5	t	74	77	97	81	0	96	B	B	S	B	-	A	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-24 07:12:51.747+00
101	R031	Eric	Lin	林子雲	我不是LUKE鴨	\N	b26629316dd3502c3a67f58c526010b7	客戶服務部	5	0	Eric|R031	1	f	71	48	43	57	1	40	B	C	C	C	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 09:29:59.93+00
114	R011	Dada	Ho	何俊達	侯統癢	\N	1535e09de1ad86425b367d339fd5c5e2	值班技術四組	0	7	Dada|R011	5	f	30	130	60	50	0	-800	C	S	B	C	W	D	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-03-15 03:40:53.656+00
113	R013	Jessie	Chiao	焦小紅	傑西	\N	a7c141ff52db9689cbc36c4d00fcf75e	聊天管理組	3	0	Jessie|R013	4	t	70	60	50	60	0	70	B	B	C	C	-	B	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-24 07:12:51.748+00
109	R018	Quake	Chiu	邱柏洋	貂	\N	5ae6586d55a99be429364df0d36d824c	值班技術三組	2	0	Quake|R018	7	t	85	90	98	40	0	888	A	A	S	C	-	S	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-02-24 07:12:51.748+00
110	R019	Susan	Su	蘇穎珊	我心已打烊	\N	ddb1b62e0c8c0b8b020fb2a35cee6494	架構發展事業部	0	4	Susan|R019	3	f	10	10	10	10	0	10	D	C	C	C	-	C	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-03-05 04:46:35.348+00
119	R006	Peter	Chuang	全士芃	HA↗HA↘HA↗HA↘	\N	4297f44b13955235245b2497399d7a93	值班技術一組	0	3	Peter|R006	3	f	1	1	1	1	0	1	D	D	D	D	-	D	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-03-05 04:49:23.231+00
100	R035	Roy	Chen	陳孟成	史塔克潮靈	\N	9269fe822ba7fe9b9e58a6c5a3b21f0d	值班客服二組	1	0	Roy|R035	6	t	82	83	60	73	0	54	A	A	B	B	-	B	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-26 09:07:32.951+00
111	R017	Jeff	Huang	黃忠信	雞排要切不要辣	\N	605f2024b919a577e56dd3b9893086d8	值班客服二組	1	0	Jeff|R017	4	f	82	80	70	85	1	66	A	A	B	A	-	B	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-26 09:29:59.932+00
108	R021	Luke	Yang	楊伯麟	天虎令	\N	d5f817550159129bacf83b601e0f73e1	運維中心	0	7	Luke|R021	5	f	72	81	76	57	0	93	B	A	A	C	-	A	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 04:44:18.018+00
16	R343	Snow	Jhung	莊格維	小惡魔	\N	476df5d1f5782f99f6bd091619a7a9f5	開發組	0	0	Snow|R343	99	t	9999	9999	9999	9999	0	9999	S	S	S	S	W	S	1	999	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":99999,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-09 07:16:06.498+00
80	R082	Alison	Lin	林宛諭	艾利森	\N	ab3f1c8e97e2eb1c5c7e41c60b768a58	值班客服三組	6	0	Alison|R082	7	t	80	60	70	100	0	40	A	B	B	S	-	C	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-24 07:12:51.747+00
120	R001	Mickey	Hou	侯統揚		\N		運維中心	0	0	Mickey|R001	3	f	0	0	0	0	0	0	-	-	-	-	-	-	0	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3}	2021-02-20 12:20:58.71+00	2021-02-24 02:36:49.182+00
30	R313	Lora	Yeh	葉雅齡	生氣買個包＄	\N	59bd8893c753a65e79981563e6747f3e	值班客服二組	1	0	Lora|R313	4	f	46	96	83	83	0	62	C	S	A	A	-	B	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-26 08:50:48.699+00
15	R342	Kai	Hsu	徐鵬凱	野人男子漢	\N	1f154a22ce09feda95539071e37739d2	值班技術三組	2	0	Kai|R342	5	f	96	87	83	82	0	60	S	A	A	A	-	B	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-03 08:44:53.135+00
105	R023	Crystal	Yang	楊麗萍	水晶女皇	\N	e10adc3949ba59abbe56e057f20f883e	產品服務處	3	0	Crystal|R023	2	f	49	67	49	78	0	82	C	B	C	B	-	A	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:52:27.542+00
69	R133	Tim	Lee	李政庭	銅鬚布萊恩	\N	0d9b3ba508988706ce77650cf5252065	值班客服三組	3	0	Tim|R133	5	f	94	93	88	86	0	79	A	S	A	A	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-02-26 08:52:27.595+00
22	R330	Jerry	Chang	張振嘉	膨風的眼鏡犬	\N	410d9b1e9aceccceb05ec9f536509a78	值班技術二組	4	0	Jerry|R330	1	f	55	45	45	45	0	45	C	C	C	C	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 08:53:11.815+00
74	R113	Grey	Chang	張士駿	給我一杯酒	\N	5e7f268e14b50c5497053e70ac51eae7	值班技術一組	0	8	Grey|R113	4	f	30	50	30	70	0	50	C	C	C	B	-	C	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-03-05 04:42:57.574+00
61	R187	David	Wang	王彥翔	秋芭比母捏牛	\N	cc2ac239cbff04183c2542b08a508fb5	值班技術四組	0	8	David|R187	6	f	91	92	88	97	0	44	A	S	A	A	-	C	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:42:57.581+00
21	R331	Steve	Chen	陳炫佳	石少甫	\N	b59c67bf196a4758191e42f76670ceba	風險管理處	0	8	Steve|R331	4	f	87	77	74	84	0	77	A	A	A	A	-	A	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-17 07:32:50.318+00
13	R348	Jack	Lo	駱文傑	哇	\N	e20898d52fa279e7e87ea86389862978	值班技術二組	0	4	Jack|R348	8	f	87	87	87	87	0	87	A	A	A	A	-	A	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:46:35.344+00
52	R246	Howard	Huang	黃瑋顥	洲子街大地主	\N	95eaa1cb109ecb8a5ae90753dee6f8f6	聊天管理組	0	3	Howard|R246	7	f	88	88	88	88	0	88	A	A	A	A	-	A	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:46:57.365+00
68	R147	Andy	Tsai	蔡偉豪	《鞋鞋你愛我》	\N	65ed2284b4e7f1c8897f5a984b21ad8b	值班技術三組	0	2	Andy|R147	6	f	98	92	56	81	0	67	S	S	B	B	-	B	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 04:50:20.733+00
104	R022	Strong	Lin	林世創	山裡阿巴	\N	993500704586461166b03cb8742d7219	值班客服一組	5	0	Strong|R022	4	f	94	77	73	93	0	52	A	B	A	A	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-02 02:34:08.323+00
3	R365	John	Shih	石曜彰	小小電磁小象幫幫	\N	0cb8e6169932547420b0361bd20a4e04	風險管理處	7	0	John|R365	3	f	86	71	57	53	0	84	A	B	B	C	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 08:55:23.263+00
63	R176	Cailin	Yu	余采疄	卓耿	\N	db791768164e5e4c2a2f49be712db8ce	值班客服三組	0	2	Cailin|R176	3	f	54	53	51	68	0	68	C	C	C	B	-	B	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-03-05 04:50:20.731+00
60	R192	Sabrina	Huang	黃冠	㊣上班只為等放飯㊣	\N	321b6a9282390c536954877cdbc5c4f3	值班客服三組	6	0	Sabrina|R192	1	f	15	37	35	40	0	15	C	C	C	C	-	C	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 09:07:32.94+00
92	R047	Saya	Zhun	鍾瀅	OSUTTE	\N	c0815c4326017cbba13b6b2b4704d975	值班客服三組	6	0	Saya|R047	3	f	50	75	50	100	0	75	C	B	C	S	-	A	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 09:07:32.94+00
64	R178	Lynn	Chen	陳孟伶	脾氣最好的姐姐 ◉‿◉	\N	7a4943b9f993e6ca9de3f74411e5e36f	值班客服一組	0	7	Lynn|R178	4	f	45	50	50	80	0	60	C	C	C	B	-	B	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-03-05 04:44:18.014+00
1	R367	Joanne	Lin	林夢祖	熱血沸騰洗廁所殺手	\N	c02f43b619432ec4728f1a286386a31e	總務行政處	0	7	Joanne|R367	4	f	70	60	55	85	0	100	B	B	B	A	-	S	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 04:44:18.07+00
56	R209	Steven	Kuo	郭誠馥	走位有如霍金般風騷	\N	a28f05f5f45fe2d8a900736c8935fe44	值班客服二組	0	1	Steven|R209	8	f	32767	32767	32767	32767	0	32767	S	S	S	S	-	S	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:51:03.269+00
10	R353	Ariel	Tsai	蔡玥箮	貓貓貓頭鷹	\N	6475eece788cecd9381c4bb5cb8bd8d0	開發組	0	0	Ariel|R353	8	f	50	100	70	100	0	99	C	S	B	S	-	S	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-02-24 07:12:51.734+00
48	R267	Kenneth	Yang	楊立綱	一級弓箭手	\N	0d190354b8ccf5a03d460d71ad033c8c	資料庫管理組	5	0	Kenneth|R267	3	f	47	88	52	85	0	86	C	A	C	A	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-02-26 08:53:53.073+00
96	R045	Walter	Chang	張振華	沒收功就罵髒話	\N	5f148034b0cd2f36f6bca53c5dfcaf30	風險管理處	0	5	Walter|R045	5	f	70	55	56	61	0	51	B	B	B	B	-	C	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-03-05 04:45:55.874+00
84	R064	Castle	Cheng	程晉鴻	愛你	\N	62c8ad0a15d9d1ca38d5dee762a16e01	開發組	0	4	Castle|R064	2	f	30	45	40	5	0	100	C	C	C	C	-	S	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-03-05 04:46:35.349+00
44	R276	Jeffrey	Yang	楊嘉進	↗統神端火鍋↙	\N	0fc78aaa869fbc61e22d9e2bd8a6229a	值班客服二組	0	1	Jeffrey|R276	7	f	100	80	100	60	0	100	S	A	S	C	-	S	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-03-05 04:51:03.275+00
83	R067	Falcon	Wang	王嘉偉	HAWK	\N	b15ab3f829f0f897fe507ef548741afb	資料庫管理組	1	0	Falcon|R067	4	f	80	51	80	61	0	79	A	C	A	B	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-26 08:50:48.754+00
71	R123	Exia	Lai	賴佳昌	海獅會害怕	\N	ed8202444a51874ba75cd113edce0ceb	值班技術一組	8	0	Exia|R123	5	f	87	87	87	87	1	87	A	A	A	A	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-02-26 09:29:30.759+00
85	R059	Yuchen	Chen	陳昱丞	🚀握不住的他🚀	\N	592bba9437b1d04f95525d1810d827c4	值班技術一組	8	0	Yuchen|R059	1	f	91	86	56	53	0	94	A	A	B	C	-	A	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 05:24:34.08+00
106	R024	Rita	Hsu	許雅玲	瑞塔	\N	78c53d26592e378e9786586ee2a5e12a	值班客服一組	7	0	Rita|R024	7	t	72	82	52	86	0	92	B	A	C	A	-	A	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-24 07:12:51.746+00
23	R329	Andy	Yu	俞安	涅法雷姆	\N	156bd578c3384f57a02fef459caf010b	值班技術二組	0	4	Andy|R329	2	f	-87	-87	-87	-87	0	-87	D	D	D	D	-	D	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-03-05 04:46:35.34+00
87	R055	Jacob	Tan	譚奇勝	傳話仔	\N	a96e117ca6dabb6e491d42cc25a0fe39	值班客服二組	0	1	Jacob|R055	6	f	94	89	82	44	0	44	A	A	A	C	-	C	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":3}	2021-02-20 12:20:58.71+00	2021-03-05 04:51:03.267+00
41	R285	Jenny	Hsieh	謝蕓楨	乂☆煞氣a丁尼☆乂	\N	b898a757e91d03d35860ffbafe93c3a6	值班客服二組	0	1	Jenny|R285	6	f	87	87	87	87	0	5	A	A	A	A	-	C	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 04:51:03.271+00
32	R309	Michael	Wan	萬慶生	一隻菜雞	\N	a3152170239ad11d22437b7661b4ee94	資料庫管理組	0	0	Michael|R309	5	f	93	83	98	73	0	84	A	A	S	B	-	A	0	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":5}	2021-02-20 12:20:58.71+00	2021-02-26 06:31:06.738+00
112	R015	Ken	Kan	甘博仁	西米拉拉非	\N	6fc5cde9a2e0978a2560a4a7488e0281	值班客服二組	1	0	Ken|R015	1	f	50	20	30	20	0	10	C	C	C	C	-	C	1	0	1	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":1}	2021-02-20 12:20:58.71+00	2021-02-26 08:50:48.703+00
50	R255	Sky	Huang	黃忠政	公主道車神	\N	6aeca88aecba6298fee669c93c18da98	聊天管理組	0	3	Sky|R255	5	f	85	70	70	85	0	60	A	B	B	A	-	B	1	0	1	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":1,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-03-05 04:46:57.362+00
115	R009	Hako	Yang	楊劭儀	珂珂	\N	3e3ebded3ad3d64afb5f6c20ba34e411	產品服務處	5	0	Hako|R009	7	t	83	80	81	75	0	75	A	A	A	B	-	B	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":3,"ability_score":4}	2021-02-20 12:20:58.71+00	2021-02-24 07:12:51.746+00
103	R027	Shin	Lin	林欣馨	來治星星的我	\N	c8837b23ff8aaa8a2dde915473ce0991	值班客服三組	6	0	Shin|R027	2	f	55	60	50	70	0	55	C	B	C	B	-	B	1	0	2	0	0	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":0,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-02-26 08:54:37.299+00
107	R148	Lucy	Wu	吳雅雯	奶油綜合菇	\N	8fc3405797e10aafe4a8d7aff3fb4f00	風險管理處	0	2	Lucy|R148	4	f	58	47	74	68	0	50	C	C	A	B	-	C	1	0	2	0	1	{"origin": 0,"now": 0,"sdcwc":[0,0,0,0,0]}	{"before_mvp_score":2,"ability_score":2}	2021-02-20 12:20:58.71+00	2021-03-05 04:50:20.726+00
\.


--
-- Data for Name: Voters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Voters" (id, "houseId", "userId", vote, "voteTwo", "voteThree", round, "createdAt", "updatedAt") FROM stdin;
7	7	106	102	64	29	1	2021-03-22 03:51:19.41+00	2021-03-22 08:03:37.985+00
23	8	85	0	0	0	1	2021-03-22 04:54:59.865+00	2021-03-22 04:55:08.857+00
5	7	102	106	0	0	1	2021-03-22 03:50:33.151+00	2021-03-22 03:50:43.302+00
17	0	33	34	19	0	1	2021-03-22 03:57:52.018+00	2021-03-22 05:01:26.152+00
19	6	80	0	0	0	1	2021-03-22 04:08:00.908+00	2021-03-22 04:08:17.083+00
3	0	87	93	111	77	1	2021-03-22 03:50:25.165+00	2021-03-23 03:53:39.484+00
53	0	43	69	119	50	1	2021-03-23 06:58:19.901+00	2021-03-23 06:58:45.461+00
25	0	2	21	0	0	1	2021-03-22 05:15:28.803+00	2021-03-22 05:15:35.539+00
57	0	110	86	84	97	1	2021-03-23 07:08:29.316+00	2021-03-23 07:09:50.315+00
11	0	114	29	0	0	1	2021-03-22 03:53:34.575+00	2021-03-22 03:53:58.277+00
32	7	4	106	102	12	1	2021-03-22 09:09:43.099+00	2021-03-22 09:09:52.145+00
1	0	19	34	0	45	1	2021-03-22 03:49:45.731+00	2021-03-23 01:07:54.92+00
31	0	13	86	97	0	1	2021-03-22 07:26:23.167+00	2021-03-22 10:06:53.388+00
28	8	71	0	0	0	1	2021-03-22 06:44:44.802+00	2021-03-22 10:28:12.396+00
58	3	113	69	119	50	1	2021-03-23 07:25:10.912+00	2021-03-23 07:25:38.806+00
20	0	86	91	36	110	1	2021-03-22 04:15:28.305+00	2021-03-22 04:16:49.738+00
55	0	7	33	26	27	1	2021-03-23 06:59:57.418+00	2021-03-23 07:00:12.761+00
6	0	41	93	44	87	1	2021-03-22 03:50:48.917+00	2021-03-22 03:56:17.952+00
4	1	93	111	30	77	1	2021-03-22 03:50:31.89+00	2021-03-23 03:55:13.98+00
15	4	5	97	86	0	1	2021-03-22 03:57:12.798+00	2021-03-23 04:41:47.133+00
16	0	67	72	107	55	1	2021-03-22 03:57:41.996+00	2021-03-23 07:00:43.403+00
46	5	49	19	45	34	1	2021-03-23 01:12:27.788+00	2021-03-23 01:12:43.19+00
33	8	53	85	0	0	1	2021-03-22 11:47:38.181+00	2021-03-22 11:48:04.285+00
9	0	84	86	36	5	1	2021-03-22 03:51:45.559+00	2021-03-22 03:55:10.179+00
22	3	105	42	20	35	1	2021-03-22 04:34:24.271+00	2021-03-22 04:35:11.984+00
14	0	90	0	0	0	1	2021-03-22 03:55:50.961+00	2021-03-22 03:56:20.757+00
45	5	39	45	34	101	1	2021-03-23 01:09:06.633+00	2021-03-23 01:19:00.478+00
51	3	20	119	113	69	1	2021-03-23 05:34:19.534+00	2021-03-23 05:34:30.191+00
26	4	97	117	86	36	1	2021-03-22 05:31:54.876+00	2021-03-23 05:39:34.783+00
13	0	108	12	102	81	1	2021-03-22 03:55:31.94+00	2021-03-22 03:56:29.789+00
2	0	44	93	100	111	1	2021-03-22 03:50:10.934+00	2021-03-22 03:51:26.493+00
35	0	21	0	0	0	1	2021-03-22 14:42:38.543+00	2021-03-22 14:42:40.399+00
10	0	47	93	87	77	1	2021-03-22 03:52:47.948+00	2021-03-22 06:13:42.535+00
18	0	82	86	0	0	1	2021-03-22 04:05:25.054+00	2021-03-22 04:45:32.058+00
27	0	74	71	85	2	1	2021-03-22 06:30:21.224+00	2021-03-22 06:31:03.956+00
47	8	118	71	85	74	1	2021-03-23 01:23:30.449+00	2021-03-23 01:24:08.52+00
24	0	99	0	0	0	1	2021-03-22 05:00:59.052+00	2021-03-23 02:27:57.596+00
8	0	96	34	115	19	1	2021-03-22 03:51:44.261+00	2021-03-22 06:44:47.761+00
29	4	40	97	0	0	1	2021-03-22 07:12:52.611+00	2021-03-22 07:12:52.611+00
30	0	50	69	0	0	1	2021-03-22 07:26:17.819+00	2021-03-22 07:26:17.819+00
48	6	98	0	0	0	1	2021-03-23 02:30:13.821+00	2021-03-23 02:30:14.717+00
43	7	81	102	0	0	1	2021-03-23 00:31:47.466+00	2021-03-23 03:12:30.535+00
36	1	111	77	44	47	1	2021-03-22 15:32:42.786+00	2021-03-22 15:42:06.094+00
34	0	45	115	34	19	1	2021-03-22 14:26:32.681+00	2021-03-22 15:53:59.251+00
39	0	62	118	71	85	1	2021-03-22 22:58:40.698+00	2021-03-22 23:07:59.037+00
52	0	14	85	118	21	1	2021-03-23 05:59:25.654+00	2021-03-23 05:59:37.836+00
40	6	60	0	0	0	1	2021-03-22 23:09:11.123+00	2021-03-22 23:09:14.22+00
21	3	25	0	0	0	1	2021-03-22 04:17:52.084+00	2021-03-22 07:28:38.032+00
54	2	72	67	55	51	1	2021-03-23 06:59:12.544+00	2021-03-23 07:03:49.525+00
41	0	52	69	0	0	1	2021-03-23 00:15:58.24+00	2021-03-23 00:16:05.225+00
59	5	104	39	115	34	1	2021-03-23 07:48:48.41+00	2021-03-23 07:50:16.482+00
37	3	42	50	69	105	1	2021-03-22 18:31:39.094+00	2021-03-22 18:32:33.634+00
49	5	101	34	33	45	1	2021-03-23 03:15:28.838+00	2021-03-23 03:15:46.76+00
38	0	23	97	36	91	1	2021-03-22 18:32:00.118+00	2021-03-22 18:32:36.408+00
50	2	121	72	0	0	1	2021-03-23 03:46:00.519+00	2021-03-23 03:46:00.519+00
60	5	48	115	33	0	1	2021-03-23 08:52:42.351+00	2021-03-23 08:52:48.877+00
44	0	8	71	85	118	1	2021-03-23 00:55:25.38+00	2021-03-23 06:39:53.189+00
42	2	15	0	0	0	1	2021-03-23 00:31:14.589+00	2021-03-23 00:31:23.172+00
12	2	109	72	55	51	1	2021-03-22 03:54:03.135+00	2021-03-23 06:52:32.328+00
56	2	89	109	72	15	1	2021-03-23 07:03:04.12+00	2021-03-23 07:09:34.528+00
\.


--
-- Name: Configs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Configs_id_seq"', 5, true);


--
-- Name: Countryside_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Countryside_id_seq"', 49, true);


--
-- Name: Games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Games_id_seq"', 14, true);


--
-- Name: Houses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Houses_id_seq"', 8, true);


--
-- Name: Matches_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Matches_id_seq"', 121, true);


--
-- Name: Orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Orders_id_seq"', 10, true);


--
-- Name: Predictions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Predictions_id_seq"', 129, true);


--
-- Name: Results_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Results_id_seq"', 1, true);


--
-- Name: Trophies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Trophies_id_seq"', 10, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 121, true);


--
-- Name: Voters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Voters_id_seq"', 60, true);


--
-- Name: Configs Configs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Configs"
    ADD CONSTRAINT "Configs_pkey" PRIMARY KEY (id);


--
-- Name: Countryside Countryside_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Countryside"
    ADD CONSTRAINT "Countryside_pkey" PRIMARY KEY (id);


--
-- Name: Games Games_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Games"
    ADD CONSTRAINT "Games_pkey" PRIMARY KEY (id);


--
-- Name: Houses Houses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Houses"
    ADD CONSTRAINT "Houses_pkey" PRIMARY KEY (id);


--
-- Name: Matches Matches_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Matches"
    ADD CONSTRAINT "Matches_pkey" PRIMARY KEY (id);


--
-- Name: Orders Orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_pkey" PRIMARY KEY (id);


--
-- Name: Predictions Predictions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Predictions"
    ADD CONSTRAINT "Predictions_pkey" PRIMARY KEY (id);


--
-- Name: Results Results_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Results"
    ADD CONSTRAINT "Results_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Trophies Trophies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Trophies"
    ADD CONSTRAINT "Trophies_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Voters Voters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Voters"
    ADD CONSTRAINT "Voters_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

