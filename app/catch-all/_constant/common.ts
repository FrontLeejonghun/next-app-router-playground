const baseKoreanTitle =
  '한글-타이틀-길게-길게-길게아주길게아주아주길게아주길게-인코딩';

const TEST_TITLE_MAP: {
  title: string;
  id: string;
  description?: string;
}[] = [
  {
    title: baseKoreanTitle,
    id: 'test-id-0',
  },
  {
    title: encodeURIComponent(`${baseKoreanTitle}`),
    id: 'test-id-1',
  },
];

export { TEST_TITLE_MAP, baseKoreanTitle };
